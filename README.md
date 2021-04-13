This is for convert and validate tools for KaiOS 2.5.4 manifest to KaiOS3.0 manifest. written by `**Next.js**`.
# Manifest Convertor rules

| 2.5.4                        | 3.0                                                        |
| ---------------------------- | ---------------------------------------------------------- |
| `name`                       | `name` based on 2.5.4 `lacales`                            |
| `short_name`                 | `short_name`                                               |
| `description`                | `description` based on 2.5.4 `lacales`                     |
| `theme_color` or `theme`     | `theme_color` also set 3.0 b2g_features `focus_color`      |
| `background_color`           | `background_color`                                         |
| `orientation`                | `orientation`                                              |
| `default_locale`             | `lang`                                                     |
| `icons`                      | `icons` with Array                                         |
| `locales`                    | generate multi manifests based on manifest.webmanifest and |
| `launch_path` or `start_url` | `start_url`                                                |
| `type`                       | `b2g_features core: true` if 2.5.4 type is certified       |
| `version`                    | `b2g_features version`                                     |
| `other items`                | move to `b2g_features`                                     |
