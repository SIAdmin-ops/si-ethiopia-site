# public/

Files here are served from the site root and copied into `dist/` verbatim.
Vite does not hash or process them, so reference them by absolute path
(`/hero-video.mp4`), never by import.

## hero-video.mp4 (required)

The hero section background. Drop the file at `public/hero-video.mp4` and it
picks up automatically no code change needed. Until it exists the `<video>`
falls back to its `poster` image, so the hero still renders.

Recommended encode the clip is muted, looping, and sits behind text, so
optimise hard for size:

| Property   | Target                                             |
| ---------- | -------------------------------------------------- |
| Resolution | 1920×1080 (the element is `object-cover`)          |
| Duration   | 8–15s, cut so the last frame matches the first     |
| Frame rate | 24–30 fps                                          |
| Codec      | H.264 High profile, `yuv420p`                      |
| Audio      | none strip it, the element is `muted` regardless |
| File size  | under ~3 MB; 5 MB is the point it starts to hurt   |

```sh
ffmpeg -i source.mov -an -vf "scale=1920:-2,fps=30" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 28 -preset slow -movflags +faststart \
  public/hero-video.mp4
```

`-movflags +faststart` moves the index to the front of the file so playback
starts before the whole thing has downloaded. Raise `-crf` to shrink further
(28–32 is usually fine behind a 70% dark tint); lower it if banding shows in
gradients.

### Optional: a WebM alongside it

VP9 typically lands 30–50% smaller than the H.264 above.

```sh
ffmpeg -i source.mov -an -vf "scale=1920:-2,fps=30" \
  -c:v libvpx-vp9 -crf 34 -b:v 0 -row-mt 1 \
  public/hero-video.webm
```

Then uncomment the WebM `<source>` in `Hero()` in `src/App.tsx` it has to be
listed *before* the MP4, since browsers take the first source they can play.

## Poster image

The `poster` currently points at a remote Unsplash URL. To drop the third-party
request, save a frame locally and reference it as `/hero-poster.jpg`:

```sh
ffmpeg -i public/hero-video.mp4 -frames:v 1 -q:v 3 public/hero-poster.jpg
```
