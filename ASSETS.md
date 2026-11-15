# Portfolio image sources

Images are stored locally under `src/assets/images/`; visitors do not need to contact the source websites to load them. Collected November 9, 2026 (Asia/Manila).

## Project screenshots

The screenshots attached in chat informed the choice of screens. Those attachments were not exposed as local files, so the portfolio uses fresh captures of the same live products rather than copies of the chat attachments. These are real browser captures, not generated product mockups. Original captures are 1600 × 1000 pixels and compressed as JPEGs.

| Local file            | Source                                        | Screen                                           |
| --------------------- | --------------------------------------------- | ------------------------------------------------ |
| `carlee-home.jpg`     | [Carlee](https://playcarlee.com/)             | Home screen                                      |
| `carlee-gameplay.jpg` | [Carlee](https://playcarlee.com/)             | Daily game after a Ferrari 308 GTSi guess        |
| `carlee-result.jpg`   | [Carlee](https://playcarlee.com/)             | Completed daily game and result-sharing controls |
| `rush-home.jpg`       | [Rush Gym Wear](https://www.rushgymwear.com/) | Homepage and clothing hero                       |

Carlee gameplay was captured in a temporary browser session without signing in. The guesses shown are demonstration gameplay, not a claimed usage statistic or achievement. No personal account information was captured. BasuraScan uses the user-supplied app icon; this is branding, not a product screenshot.

## Organization and competition logos

| Local file            | Official asset source                                                                                   | Placement                                                             |
| --------------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `usc-logo.png`        | [USC official website asset](https://usc.edu.ph/wp-content/themes/universitygo665/images/main-logo.png) | University education and the university context of student leadership |
| `rush-logo.png`       | [Rush official website asset](https://www.rushgymwear.com/logos/rush-logo.png)                          | Freelance client example                                              |
| `erovoutika-logo.png` | [Erovoutika official website asset](https://www.erovoutika.ph/Erovoutika%20white%20logo.png)            | Robotics achievement                                                  |
| `nxplorers-logo.svg`  | [NXplorers official brand asset](https://nxplorers.com/brand.svg)                                       | Shell NXplorers achievement                                           |
| `cesafi-logo.png`     | [CESAFI official website asset](https://cesafi.ph/assets/websites/cesafi/mark-ef90d2fa.png)             | CESAFI Computer Quizbowl achievement                                  |

Logos retain their original appearance and colors. Large PNG sources were resized for display. They identify the relevant organizations; they do not represent sponsorship or verification of the portfolio’s achievement claims. The original brief’s “Erouvitika” spelling is displayed as “Erovoutika” to match the organization’s official name.

USC’s logo identifies the university, not a verified Microsoft Student Community chapter mark. No chapter-specific mark was added because an authoritative source was not found. Competition imagery is limited to logos; no unrelated event photograph is presented as Dominic’s participation.

Brand assets and embedded project imagery remain the property of their respective owners. This document records provenance, not an assertion of an open-source image license.

## Updating images

Set a project’s `cover` to `{ image, alt, caption }` and `screenshots` to an array of objects with the same fields in `src/content/site.mjs`. Place the image files in `src/assets/images/`. The current screenshot helper uses 1600 × 1000 intrinsic dimensions; update the helper if future images have a different aspect ratio. Gallery images link to the full local screenshot and can be opened without JavaScript.

Organization logos use the `brands` dictionary in the same content file. Their links point to the relevant official website. Do not replace a university logo with a chapter logo until its provenance is confirmed.

## November 15 redesign

The portfolio’s own palette is blue, black, and white. Original third-party screenshots and logos retain their colors. Screenshots have local 640px and 1280px derivatives selected through `srcset`; originals remain available for full-size viewing. Logos were reduced to a maximum width of 280px for their actual display size. There are no captions under project images in the redesigned interface; provenance remains in this document. The later content update adds the supplied BasuraScan app icon and Dominic’s real portrait; no imagery is fabricated.


## Supplied portrait, résumé, and research update

- `dominic-yap.jpg`: original supplied `pfp2.jpeg` (1209 × 1195); `dominic-yap-640.jpg` is its responsive derivative. Homepage hero only, with the original colours preserved.
- `basurascan-icon.png`: resized to 800 × 800 from the supplied `basurascan.png`. Used as the actual app identity, with contain sizing. The additional supplied `basurascanlogo.png` was not duplicated in the interface.
- `documents/dominic-yap-resume.pdf`: supplied résumé, unchanged. Email and social URLs were extracted from its text and PDF link annotations. Phone number is not copied into the interface.
- `documents/basurascan-research-paper.pdf` and `documents/basurascan-research-poster.pdf`: supplied research documents, unchanged. Stack and methods follow Chapter 3; dataset size follows Appendix C; validation results and limitations follow Chapters 4–5. Results are attributed to the study, not claimed as real-world accuracy. Team authors are credited in the case study.
- The documents contain differing usability summaries, so a single SUS result is not promoted as a portfolio metric. No public app release or peer-reviewed publication is asserted.

- `basurascan-poster.jpg`: unaltered first-page preview rendered from the supplied poster PDF, linked to the full document in the case-study results section.

## Interests section

`src/assets/images/interests/photo-f194387634.jpg` and its 500/960px derivatives show a guitar bridge and strings being adjusted. Photograph by Shixart1985, [source on Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Locking_strings_on_electric_guitar_closeup.jpg), [CC BY 2.0](https://creativecommons.org/licenses/by/2.0/). Downloaded through the design skill's licensed-photo search and reviewed before use. It is contextual imagery, not a claim that the instrument or person is Dominic's. Responsive cropping is used; original colours are preserved. About's footer includes the attribution and licence. A personal guitar photograph can replace it later.

The case studies now use colours drawn from their real products: Carlee midnight/blue, BasuraScan green, and Rush black/red. Screenshot and logo pixels are unchanged.

## Personal music photos

The supplied `ARTIST.png` and `CARACALS_BAND.png` are locally optimized as `dominic-performing.jpg` and `caracals-band.jpg`. About now uses the actual performance photograph instead of the contextual stock guitar photo, and shows both supplied images after the music text. Original colours and the band poster artwork are preserved. The Spotify screenshot is visible in the conversation but its local file and artist URL have not yet been located; it has not been fabricated or replaced with a guessed link.
