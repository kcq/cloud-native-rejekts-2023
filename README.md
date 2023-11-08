# Cloud Native Rejekts - Chicago - 2023

[Talking Slides](./CloudNativeRejekts-Chicago-2023-slides.pdf)

Real readme (WIP)

## Draft Notes

### Run Demo App

`docker run -it --rm -p 1300:1300 --name demo cnr-demo:latest`

### Minify Demo App

`slim build --tag cnr-demo-minified:latest cnr-demo:latest`

### Run Minified Demo App

`docker run -it --rm -p 1300:1300 --name demo cnr-demo-minified:latest`

### Apply Magic (to get no vulns)

`slim build --obfuscate-metadata --tag cnr-demo-obfuscated:latest cnr-demo:latest`





