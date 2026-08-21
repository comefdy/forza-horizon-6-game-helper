# Forza Horizon 6 PC Settings 素材摘录

更新时间：2026-08-21

用途：为 `/pc-settings/` 页面生成原创攻略内容。本文只记录可用信息点和玩家问题，不直接复制 YouTube 或 Reddit 原文。

## 来源

- YouTube 转录素材：Forza Horizon 6 Optimization, The Best Settings to Change on PC
- Reddit 讨论：https://www.reddit.com/r/OptimizedGaming/comments/1ti3owm/forza_horizon_6_optimization_guide_an_in_depth/
- 官方 PC 体验：https://forza.net/news/forza-horizon-6-pc-experience
- 官方感谢/问题说明：https://forza.net/news/forza-horizon-6-thank-you
- Steam 页面：https://store.steampowered.com/app/2483190/Forza_Horizon_6/

## 可做页面标题

- Forza Horizon 6 Best PC Settings
- Forza Horizon 6 Optimization Guide
- Best Forza Horizon 6 Settings for 8GB GPUs

## 玩家搜索意图

- 提高 FPS，但不想画质明显变差。
- 8GB/6GB 显卡怎么避免爆显存。
- Ray Tracing 到底值不值得开。
- GI Quality、Reflection Quality、Texture Quality 哪个最影响性能。
- DLSS、FSR、XeSS、TAA 怎么选。
- 为什么 DLSS 选项不显示。
- 为什么教程或启动时崩溃。
- 为什么 GPU 使用率很低、FPS 却很差。
- 旧硬盘能不能玩，是否必须 SSD。

## 可写成原创内容的设置建议

### 画质优先方案

- Ray Traced GI Quality：Medium 比 High 更适合多数玩家，能保留自然光照同时降低开销。
- Reflections Quality：如果显存足够，可保留 RT High；如果追求 FPS，改为 Screen Space High。
- Car Reflection Quality：保留 Extreme 或 High，因为性能收益很小，车辆反射是游戏中最常看的视觉元素。
- Environment Texture Quality：显存足够时保留 Extreme；8GB GPU 建议 High。
- Environment Geometry Quality：高端显卡可用 Extreme；性能优先或 8GB GPU 建议 High。
- Shader Quality：High 是较稳的折中点。
- Volumetric Fog Quality：High 足够。
- Deformable Terrain / Audio / Motion Blur Quality：降低收益很小，可优先保持高档位。

### 高 FPS 方案

- 关闭 RT GI 和 RT Reflections。
- 使用 Screen Space GI High 或 Medium。
- 使用 Screen Space Reflections High。
- Shadow Quality 使用 High 或 Ultra。
- Night Shadows 使用 Ultra 或 Off，按夜间 FPS 情况选择。
- 关闭独立的 Motion Blur。
- 使用 DLSS Quality / FSR Quality / XeSS Quality，而不是盲目降分辨率。

### 8GB GPU 方案

- 关闭 Ray Tracing。
- Environment Texture Quality：High。
- Environment Geometry Quality：High。
- Screen Space GI：Medium 或 High。
- Screen Space Reflections：High。
- 避免 Extreme/Ultra 纹理占满显存。
- 优先更新 GPU 驱动，尤其是 Nvidia Game Ready Driver。

### Optimized Settings 清单素材

可转成页面中的推荐设置表，适合标题：Best Balanced Settings、Optimized PC Settings、8GB GPU Friendly Settings。

| Setting | Recommended Value | Notes |
| --- | --- | --- |
| Car Level of Detail | Ultra | 车辆展示和驾驶时都明显可见，优先保留较高档位。 |
| Environment Texture Quality | High | 8GB GPU 优先使用 High，避免显存压力过大。 |
| Environment Geometry Quality | High or Ultra | Ultra 可能更重，可给性能优先玩家推荐 High。 |
| Car Reflection Quality | Medium or High | 车辆反射影响观感，但可在中高档之间按 FPS 调整。 |
| Screen Space Reflections Quality | High or Extreme | 不开 RT 时，这是反射质量的主要来源。 |
| Raytraced Reflection Quality | Off | 平衡方案优先关闭 RT 反射。 |
| Shadow Quality | High or Ultra | High 是稳妥值，Ultra 适合性能余量充足的配置。 |
| Night Shadows | Off or Ultra | 夜间性能差可关闭，画质优先可用 Ultra。 |
| Screen Space GI Quality | Medium or High | 平衡画面和帧率的核心设置。 |
| Raytraced GI Quality | Off or Medium | 关闭最省性能；Medium 适合想保留部分 RT 光照的高端卡。 |
| Shader Quality | High | 作为稳定折中档位。 |
| Audio Quality | Ultra | 通常不作为优先降档项。 |
| Deformable Terrain Quality | High | 性能收益有限，可保留 High。 |
| Particle Effects Quality | Low | 雨雪、粒子多的场景可降低负载。 |
| Volumetric Fog Quality | High | High 通常足够。 |
| Lens Effects | Ultra | 偏个人偏好，可保留或关闭。 |
| Motion Blur | Short | 偏个人偏好，竞速玩家可关闭或缩短。 |
| Motion Blur Quality | Ultra | 如果开启动态模糊，质量档位可保留高。 |

补充注意：

- 如果雨雪粒子不可见，可以先切到 Ultra Effects Quality，再切回玩家想用的档位，作为临时排查建议。
- DLSS 4.5 presets L/M 和游戏 TAA 都可作为减少车辆 ghosting 的候选项，页面写法应建议玩家在相同赛道、相同天气下对比，而不是只看平均 FPS。

## Reddit 评论可转成 FAQ 的问题

### 为什么 DLSS 不显示？

素材结论：玩家评论集中建议先确认 Nvidia GPU、更新 Game Ready Driver，并检查 HAGS 等系统图形设置。页面写法应保持谨慎：先检查显卡、驱动、系统设置和游戏重启。

### DLSS 会不会导致车辆 ghosting？

素材结论：多个玩家讨论 DLSS/TAA 在特定光照和镜头角度下可能出现车辆拖影。页面可建议对画面敏感的玩家比较 DLSS Quality、DLAA、TAA、FSR/XeSS，不要只看平均 FPS。

### 为什么教程阶段崩溃？

素材结论：评论里有人建议更新 C++ Redistributable；也有人提到 RTSS/RivaTuner 可能导致游戏启动或运行异常。页面应写成排查清单，不承诺一定解决。

### 为什么 GPU 使用率低但 FPS 很差？

素材结论：可能是 CPU、内存、驱动、笔记本性能模式、后台工具、过低分辨率/FSR Performance 导致瓶颈转移。页面可建议查看 CPU 使用率、笔记本性能模式、FPS 限制和后台 overlay。

### 旧 HDD 能玩吗？

素材结论：Steam 最低配置写明 SSD required，Reddit 玩家讨论也认为旧机械硬盘可能导致极低 FPS、慢动作感或加载问题。页面应明确建议安装到 SSD。

### RTX 4050 / RTX 4060 / 8GB 卡该怎么设？

素材结论：玩家反馈差异很大，笔记本功耗、驱动、性能模式、显存和分辨率都会影响表现。页面可给 1080p/1440p 两档建议，并提醒不要照搬高端显卡设置。

## 需要避免的写法

- 不要声称某设置一定提升固定百分比，除非明确引用测试环境。
- 不要把 Reddit 单个评论当官方结论。
- 不要鼓励漏洞、非法绕过或不稳定驱动修改。
- 不要复制视频或 Reddit 原文。

## 页面新增模块建议

1. Quick Answer：三套推荐设置。
2. Biggest FPS Wins：GI、Reflections、Textures、Geometry、Night Shadows。
3. Settings Not Worth Lowering First：Car Reflections、Audio、Deformable Terrain、Motion Blur Quality。
4. 8GB GPU Settings：专门表格。
5. Troubleshooting FAQ：DLSS 缺失、ghosting、crash、low GPU usage、SSD required。
6. Sources：YouTube 转录、Reddit 讨论、官方 PC 体验、Steam。
