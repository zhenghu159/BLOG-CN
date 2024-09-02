(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{476:function(t,e,a){"use strict";a.r(e);var s=a(1),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("题目: Cellpose: 一种用于细胞分割的通用算法"),a("br"),t._v("\nDOI: "),a("a",{attrs:{href:"https://doi.org/10.1038/s41592-020-01018-x",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://doi.org/10.1038/s41592-020-01018-x"),a("OutboundLink")],1),a("br"),t._v("\nCite: Stringer, C., Wang, T., Michaelos, M. et al. Cellpose: a generalist algorithm for cellular segmentation. "),a("em",[t._v("Nat Methods")]),t._v(" 18, 100–106 (2021).")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("相关阅读")]),t._v(" "),a("p",[t._v("微信公众号："),a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzkwMjM0MzA5MA==&mid=2247484055&idx=1&sn=2d64e15d34e725fedabb54fb81a555d5&chksm=c0a7b24af7d03b5c0b935d7f4da4b1519dfbe5ea3aad537eeb267b4542ab29d66b71ab71e21b&token=1421997773&lang=zh_CN#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("文献阅读：Cellpose: 一种用于细胞分割的通用算法"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("strong",[t._v("作者介绍：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Marius Pachitariu")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:"https://www.janelia.org/sites/default/files/styles/epsa_200x200/public/pictures/pachitarium.jpg?itok=MQmLmpdg",width:"200"}})])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("HHMI Janelia Research Campus")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{href:"mailto:pachitarium@janelia.hhmi.org"}},[t._v("pachitarium@janelia.hhmi.org")])])])])]),t._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[t._v("#")]),t._v(" Abstract")]),t._v(" "),a("p",[t._v("许多生物学应用需要从显微镜图像中分割出细胞体、细胞膜和细胞核。深度学习使得在这个问题上取得了巨大进展，但当前的方法专门针对有大型训练数据集的图像。在这里，我们介绍了一种名为 Cellpose 的通用的、基于深度学习的分割方法，它可以精确地从各种类型的图像中分割出细胞，不需要模型重新训练或参数调整。Cellpose 是在一个包含超过 70,000 个分割对象的高度变化的细胞图像数据集上进行训练的。我们还展示了 Cellpose 的三维扩展，它重用了二维模型，不需要三维标记数据。为了支持社区对训练数据的贡献，我们开发了手动标记和自动结果筛选的软件。定期在社区贡献的数据上重新训练模型将确保 Cellpose 不断改进。")]),t._v(" "),a("h2",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("定量细胞生物学需要测量多个细胞属性，如形状、位置、RNA 表达和蛋白质表达。为了将这些属性分配给个体细胞，必须首先将图像体分割成细胞体，通常基于细胞质或膜标记物。当细胞在单一分散培养中分离足够彼此远离时，这一步骤可以很简单。然而，在许多组织中，细胞紧密地堆积在一起，很难分离。")]),t._v(" "),a("p",[t._v("细胞体分割的大多数方法在灵活性和自动化之间做出了权衡。这些方法从完全手动标记到涉及一系列图像转换的用户自定义流水线，其中包括用户定义的参数，再到基于深度神经网络的完全自动化方法，其参数是在大型训练数据集上估计的。完全自动化的方法有许多优点，如减少人力投入、提高可重复性以及更好地扩展到来自大规模筛选的大型数据集。然而，这些方法通常是针对专门的数据集进行训练的，并且不适用于其他类型的数据，需要新的人工标记图像才能在任何一个图像类型上实现良好的性能。")]),t._v(" "),a("p",[t._v("为了解决核分割中的泛化问题，最近的一个数据科学挑战(Data Science Bowl)收集了来自许多不同实验室的核显微图像数据集。在这个数据集上训练的方法可以比那些只使用单一实验室的数据进行训练的方法具有更广泛的泛化性。该挑战的获胜方法基于已有的计算机视觉算法，如 Mask R-CNN 模型。在比赛之后，该数据集继续推动了其他方法的发展，如 Stardist 和 nucleAIzer 等。")]),t._v(" "),a("p",[t._v("本研究遵循数据科学挑战团队的方法，收集并手动分割了许多显微镜模态和荧光标记的细胞图像数据集。由于细胞具有高度多样化的形状，因此单一模型可能无法分割所有这些形状，我们无法保证能够复制数据科学挑战的成功。以前的方法在这个数据集上表现不佳，因此我们开发了一种具有更好表达能力的新模型，称为Cellpose。接下来我们将描述 Cellpose 的架构和新的训练数据集，并展示测试数据上的性能基准测试以及 3D 扩展。Cellpose 软件包带有图形用户界面（Extended Data Fig. 1），使用 Python 3 实现，使用开源软件包进行安装。Cellpose 是免费的，可在 <www.cellpose.org> 上进行本地安装或在线测试。")]),t._v(" "),a("h2",{attrs:{id:"results"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#results"}},[t._v("#")]),t._v(" Results")]),t._v(" "),a("p",[a("strong",[t._v("Model design.")]),t._v(" 传统的基于分水岭算法的分割方法（watershed algorithm）使用图像的灰度值创建拓扑图，其盆地（basins）表示分割区域。当分割对象的强度剖面从中心平滑衰减时，这些方法效果良好，因此分水岭形成单一盆地。然而，许多类型的细胞形成多个强度盆地，通常由于荧光标记的核排除及其沿细胞边缘和突起的不均匀分布。这些问题促使我们构建了一个中间表示，该表示不形成单一平滑的拓扑盆地（Fig. 1a,b）。")]),t._v(" "),a("p",[t._v("我们通过模拟扩散的过程生成了拓扑图，该过程使用了人工标注者绘制的 ground-truth masks（Fig. 1a）。然后，训练了一个神经网络来预测拓扑图的水平和垂直梯度，以及一个二进制图，指示给定像素是否在感兴趣区域（ROI）内（Fig. 1c,d）。在测试图像上，神经网络预测水平和垂直梯度，形成向量场。通过跟随梯度跟踪（gradient tracking）的过程，所有属于给定细胞的像素可以路由到其中心。因此，通过将汇聚到同一点的像素分组，我们恢复了单个细胞及其精确的形状（Fig. 1e,f and Methods）。通过预测神经网络预测为细胞外部的像素，进一步优化细胞形状。")]),t._v(" "),a("p",[t._v('我们所用的神经网络预测空间梯度是基于通用的 U-Net 结构的，它在多次下采样卷积映射后以镜像对称的方式上采样（Fig. 1d）。在上采样传递中，U-Net 通过将下采样传递中的卷积映射与上采样传递中的卷积映射混合来实现。这种混合通常通过特征串联实现，但我们选择了直接求和以减少参数数量。我们还用残差块替换了 U-Net 的标准构建块，因为已经有研究表明残差块的性能更好，并将网络深度加倍，这通常是残差网络所做的。此外，我们使用了全局平均池化来获取图像的 "风格" 表示。我们预期不同风格的图像可能需要不同的处理方式，因此我们基于每个图像将风格向量馈送到所有上采样阶段。这些修改显著提高了性能（Extended Data Fig. 2a–d）。')]),t._v(" "),a("p",[t._v("我们使用了几种测试时间的增强方法来进一步提高模型的预测能力：测试时间调整大小（Extended Data Fig. 3），ROI 质量评估，模型集成和图像平铺（Methods）。算法的运行时间性能如 Supplementary Table 1 所示。")]),t._v(" "),a("h3",{attrs:{id:"fig-1-model-architecture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-1-model-architecture"}},[t._v("#")]),t._v(" Fig.1 Model architecture")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig1_HTML.png?as=webp",alt:"Fig1"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig1. 模型结构")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 将手动标注的 masks 转换为可由神经网络预测的向量流表示的过程。一个从 mask 中心开始的模拟扩散过程被用来推导出指向细胞中心的空间梯度，可能是间接地围绕着角落。x 和 y 梯度在从 0° 到 360° 的单一方向上组合。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 来自训练数据集中的细胞的空间梯度示例。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 一个神经网络被训练来预测水平和垂直梯度，以及一个像素是否属于任何细胞。这三个预测的图被组合成一个梯度向量场。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 包含一个标准的主干 U-Net 的神经网络的细节，然后对特征图进行降采样和上采样，使用相同大小的层之间的跳过连接，以及从以最低分辨率计算的图像样式到所有连续计算的全局跳过连接。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 在测试时，利用预测的梯度向量场构造一个具有不动点的动态系统，其吸引盆地代表预测的 masks。非正式地说，每个像素都“跟踪梯度”，指向它们最终的固定点。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 所有收敛到相同不动点的像素都被分配给相同的 masks。")])]),t._v(" "),a("p",[a("strong",[t._v("Training dataset.")]),t._v(' 我们通过互联网搜索关键词如 "细胞质"、"细胞显微镜"、"荧光细胞" 等方式，从多个来源收集了图像。其中一些网站是用于教育、宣传或新闻报道的图片，而其他网站则包含了以前科学出版物中使用的数据集（for example on OMERO）。该数据集主要由定位于细胞质中的荧光标记蛋白组成，有些带有 4,6-diamidino-2-phenylindole-（DAPI）染色的细胞核在单独的通道中（n=316 images）。我们还包括了亮场显微镜下的细胞图像（n=50）和膜标记细胞的图像（n=58）。最后，我们还包括了一小组来自其他类型显微镜的图像（n=86），以及一小组包含大量重复物体（如水果、岩石和水母）的非显微镜图像（n=98）。我们假设这些图像的包含将使网络更广泛、更强大地推广。')]),t._v(" "),a("p",[t._v("我们使用 t-SNE 将神经网络学习到的图像风格应用于数据集结构的可视化（Fig. 2）。通常，图像根据上述定义的类别放置在 embedding 中，非细胞图像类别分散在整个嵌入空间中。为了手动分割这些图像，我们使用 Python 开发了一个基于 PyQt 和 pyqtgraph 的图形用户界面（Extended Data Fig. 1）。该界面可以快速在轮廓、填充掩模和图像颜色通道等视图之间进行切换，以及进行缩放和平移等简单图像导航。右键单击会启动新的 mask，并在用户返回起始区域几个像素时自动完成。该界面允许人类操作员每小时分割 300-600 个对象，并作为我们发布的 Cellpose 软件包的一部分。分割算法也可以在同一界面中运行，使用户可以轻松地筛选和贡献自己的数据到我们的训练数据集中。")]),t._v(" "),a("p",[t._v("在包含 608 个图像的各种数据集中，100 个图像的子集作为 Cell Image Library 的一部分进行了预分割。这些两通道图像（细胞质和细胞核）来自单个实验制备，并包含形状复杂的细胞。我们认为，我们测试的分割方法不会过度拟合这样一个大而视觉统一的数据集，而是可能由于表现能力不足而失败，例如无法精确跟踪细胞轮廓或无法合并核通道的信息。因此，我们选择仅在该数据集上训练模型作为表现能力的“专家”基准。")]),t._v(" "),a("h3",{attrs:{id:"fig-2-visualization-of-the-diverse-training-dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-2-visualization-of-the-diverse-training-dataset"}},[t._v("#")]),t._v(" Fig.2 Visualization of the diverse training dataset")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig2_HTML.png?as=webp",alt:"Fig2"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig2. 不同训练数据集的可视化")]),t._v(" "),a("p",[t._v("使用 t-SNE 嵌入了细胞质数据集中所有图像的网络样式。每个点代表一个不同的图像。")])]),t._v(" "),a("h3",{attrs:{id:"fig-3-example-cellpose-segmentations-for-36-test-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-3-example-cellpose-segmentations-for-36-test-images"}},[t._v("#")]),t._v(" Fig.3 Example Cellpose segmentations for 36 test images")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig3_HTML.png?as=webp",alt:"Fig3"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig3. 36 张测试图像的 Cellpose 分割示例")]),t._v(" "),a("p",[t._v("细胞体预测的 masks 用黄色虚线表示。将这些与 Extended Data Figs. 4 and 5 中的 Stardist 和 Mask-R-CNN 进行比较。")])]),t._v(" "),a("p",[a("strong",[t._v("Benchmarks.")]),t._v(" 在我们整个图像库上训练，'generalist' Cellpose 模型在测试集上取得了良好的性能(Fig. 3)。我们还将 Cellpose 训练为专业模型，仅在细胞图像库上进行训练（'specialized data'，Fig. 4a,b），并将其与通用模型进行比较（Fig. 4ab）。我们在比较中包括了其他几种先进方法：Stardist，Mask R-CNN 以及两类和三类 U-Net模型。Stardist 和 Mask R-CNN 的示例分割显示在 Extended Data Figs. 4 and 5。在测试图像上，我们根据标准交并比度量（IoU）的不同匹配精度阈值将算法的预测与真实 masks 匹配。我们使用平均精度度量（AP）评估性能，该度量是由真阳性TP，假阳性FP和假阴性FN计算得出的，公式为AP=TP/(TP+FP+FN)。使用边界预测度量（Extended Data Fig. 6a,b）和聚合 Jaccard 指数（Extended Data Fig. 6c,d）获得了类似的结果。")]),t._v(" "),a("p",[t._v("当在专门数据上进行训练和测试时，Cellpose 在所有匹配阈值上都大大优于以前的方法。例如，在常用的 IoU 阈值 0.5下，Cellpose 正确匹配了 521 个总体真实 ROI 中的 485 个，仅产生了 18 个误报。这相当于平均精度为 0.91，而 Stardist 和 Mask R-CNN 的平均精度分别为 0.76 和 0.80。在更高的 IoU 下，也就是检验精确遵循细胞轮廓的能力的阈值下，Cellpose 相对于其他方法的改进更大。因此，这项分析表明，Cellpose 具有足够的表现力，可以捕捉复杂的形状（Fig. 4d）。")]),t._v(" "),a("p",[t._v("然而，仅在专业数据上训练的所有模型都在完整数据集上表现不佳（Fig. 4e），这促使需要一个通用算法。在仅使用专业数据（细胞图像库）时，通用 Cellpose 模型与专业模型的性能相当（Fig. 4f）。在仅使用泛化数据时，通用 Cellpose 模型在 0.5 阈值下的平均精度为 0.77，明显优于 Mask R-CNN 和 Stardist 的平均精度分别为 0.61 和 0.61（Fig. 4g）。我们还测试了是否在通用模型的训练中包含专业图像会影响其在泛化图像上的性能，并发现它们实际上有很大帮助（Extended Data Fig. 2e）。总之，这些结果表明，在训练集中包含更多图像不会饱和神经网络的容量，表明 Cellpose 可能有更多的备用容量可用于其他训练数据，我们希望通过社区贡献来确定。")]),t._v(" "),a("h3",{attrs:{id:"fig-4-segmentation-performance-of-specialist-and-generalist-algorithms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-4-segmentation-performance-of-specialist-and-generalist-algorithms"}},[t._v("#")]),t._v(" Fig.4 Segmentation performance of specialist and generalist algorithms")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig4_HTML.png?as=webp",alt:"Fig4"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig4. 专业算法和通用算法的分割性能")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 专业算法和通用算法的训练和测试数据的说明。我们将细胞图像库数据集称为 'specialist dataset'，因为其 100 张图像的一致性数据集。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" Cellpose、Mask R-CNN 和 Stardist 的图像分割示例测试。ground truth 用蓝线表示，而模型预测用黄色虚线表示。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 示例测试图像分割为相同的模型训练为通用模型。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" Cellpose、Mask R-CNN、Stardist、U-Net3 和 U-Net2 模型的量化性能，作为专业训练并在专业数据上测试（n= 11 test images）。IoU 阈值量化了预测 mask 和 ground-truth mask 之间的匹配，1 表示像素完美匹配，0.5 表示正确匹配的像素，如遗漏和假阳性像素。平均精度分数是由匹配和遗漏的 masks 的比例计算出来的。为了直观地了解这些分数的范围，请参考 b、c 和 Fig.3 中报告的值。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 专业模型在通用数据上的性能 (n = 57 test images)。"),a("br"),t._v(" "),a("strong",[t._v("fg.")]),t._v(" 通用模型上的性能，同 de。")])]),t._v(" "),a("p",[t._v("我们接下来想要确定哪些类型的图像和细胞更具挑战性。为此，我们检查了模型在我们广义测试集中每个图像类别上的预测结果（Fig. 5a）。在图像类别中，Cellpose 在非荧光细胞图像、细胞膜和 Cell Image Library 上表现更好（Fig. 3f），这很可能反映了这些图像集更具同质性。这使我们假设图像中包含更多细胞的变异性，例如细胞大小的变异性，将更难以进行分割。然而，我们发现分割性能与细胞大小的同质性之间没有关系（Fig. 5b）。最后，我们问是否凸细胞会影响分割性能，通过将细胞分为低、中和高凸性（Fig. 5b）。我们发现，所有模型在凸性高的细胞上的表现比凸性低的细胞更好（Fig. 5d），并且低凸性与高凸性的性能惩罚在各个模型中是类似的。")]),t._v(" "),a("p",[t._v("最后，我们组合了一组大量的核图像数据集，通过结合先前几个研究的预分割数据集，包括 Data Science Bowl kaggle 竞赛。由于核形状更简单和更统一，因此该数据集没有像细胞数据集那样多的变异性（see the t-SNE embedding of the segmentation styles in Extended Data Fig. 7a）。Cellpose 在这个数据集上的表现超过其他方法，但增量较小，这很可能反映了这个分割问题的难度降低（Extended Data Figs. 7b,c and 8）。")]),t._v(" "),a("h3",{attrs:{id:"fig-5-model-performance-across-image-types-and-roi-statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-5-model-performance-across-image-types-and-roi-statistics"}},[t._v("#")]),t._v(" Fig.5 Model performance across image types and ROI statistics")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig5_HTML.png?as=webp",alt:"Fig5"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig5. 模型跨类型图像的性能和 ROI 统计")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 通用模型对测试集图像的子类别的平均精度（n= 17, 5, 9, 13, 13 test images）。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 左图，具有低和高同质性的示例图像 ROI 大小，ground truth masks 为随机颜色。右图，每幅图像的 Cellpose 性能作为大小均匀性的函数。红色的叉表示来自左图中的示例图像。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" ROI masks 的随机样本按凸性百分位数划分为三个子集。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 左图，通用数据的 IoU 阈值为 0.5 时缺失 ROI 的比例 (n= 57 test images)。右图，通用数据在 IoU≥0.5时真阳性 ROI 的平均 IoU (n= 57 test images)。")])]),t._v(" "),a("p",[a("strong",[t._v("3D segmentation.")]),t._v(" 我们最后的贡献是将 Cellpose 泛化到 3D segmentation。这个任务通常需要 3D 训练数据，相比于 2D 训练数据更加难以获得，因为它需要为体积中的每个切片进行一次 2D 分割。因此，对于在我们的数据集中的中位直径为 30 个像素的细胞来说，在 3D 中手动分割将需要更长的时间。另一种方法是通过在每个 2D 切片上运行神经网络来将预训练的通用 2D 模型扩展到 3D。对于一些模型（如 U-Nets），接下来的 3D 分割步骤很简单，因为在 3D 和 2D 中执行找到连通组件的后处理步骤是相似的。")]),t._v(" "),a("p",[t._v("然而，这种类型的扩展对于具有更复杂后处理步骤的模型（如 Cellpose、Stardist 和 Mask R-CNN）不可用。因此，我们设计了一种新的方法，使用仅训练好的 2D 模型而不是额外的 3D 训练数据来将 Cellpose 扩展到 3D。对于一个测试体积，我们分别在所有 xy、xz 和 yz 切片上独立地运行 Cellpose（Fig. 6a,b）。对于每个点，这个过程生成了 x、y和 z 方向上的两个梯度估计（即总共六个预测），然后我们将它们平均在一起得到完整的 3D 向量梯度集合。为了生成 ROI，我们然后在 3D 中运行梯度向量跟踪步骤，然后对收敛到相同固定点的像素进行聚类（Fig. 6e）。")]),t._v(" "),a("p",[t._v("我们将 Cellpose3D 与 2D U-Net 模型的 3D 扩展进行了比较（Fig. 6e）。我们还比较了另一种不同的 3D 方法，即从每个 xy 平面依次“拼接”2D 分割。这种方法可以应用于任何 2D 方法，包括通用的 Stardist 和Mask R-CNN 模型。最后，我们使用 ilastik 生成了针对该体积的特定 3D 分割流程。ilastik 的参数是手动选择的，以在未用于测试的子集上获得良好的性能。与 Cellpose3D 一样，ilastik 不需要大量的 3D 训练数据集，因此可以由非专家进行培训和部署。")]),t._v(" "),a("p",[t._v("我们在手动注释的 3D 测试体积上评估了 Cellpose3D 和其他模型的性能，其中 DNA 和 RNA 被共染色以作为核和细胞质标记物（Fig. 6f）。人工标注者发现了183个细胞，而 Cellpose3D 预测了 172 个细胞，在 IoU 阈值为 0.5 时有 17 个误报（Fig. 6g, Videos 1 and 2）。在所有 IoU 阈值下，Cellpose3D 的性能优于 ilastik 流程。Cellpose3D 还大幅优于 Cellpose 和其他模型的 2D 拼接版本（Fig. 6g）。最后，Cellpose3D的性能也优于 U-Net 的 3D 扩展。")]),t._v(" "),a("h3",{attrs:{id:"fig-6-segmentation-in-3d-without-3d-labeled-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fig-6-segmentation-in-3d-without-3d-labeled-data"}},[t._v("#")]),t._v(" Fig.6 Segmentation in 3D without 3D-labeled data")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig6_HTML.png?as=webp",alt:"Fig6"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Fig6. 无 3D 标记数据的 3D 分割")]),t._v(" "),a("p",[a("strong",[t._v("a.")]),t._v(" 3D 体积切片成 xy、xz 和 yz 部分。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 每种类型的截面的示例框架。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 每一个二维帧通过 Cellpose 预测网络（根据通用数据进行训练，Fig.4f,g），生成预测的二维梯度图。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 6 个预测的梯度图（two each for x, y and z）被成对平均，并组合成一个单一的三维梯度向量场 xyz。显示的是组合的 xy 梯度图以及 z 梯度图，对于通过体积的单个 xy 切片。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 三维梯度映射用于创建指向梯度向量场的 3D sinks 的像素动态，如果像素收敛到同一个 sink，则这些像素被分组为 3D masks。"),a("br"),t._v(" "),a("strong",[t._v("f.")]),t._v(" 在 z stack 中不同深度带有 ground-truth（蓝色）和预测（黄色虚线）masks 的 xy 切片。"),a("br"),t._v(" "),a("strong",[t._v("g.")]),t._v(" 与其他模型相比，Cellpose3D 在不同 IoU 阈值下的平均精度。")])]),t._v(" "),a("h2",{attrs:{id:"discussion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[t._v("#")]),t._v(" Discussion")]),t._v(" "),a("p",[t._v("本文介绍了 Cellpose，一种通用模型，可以在不需要参数调整、新的训练数据或进一步模型重新训练的情况下分割许多类型的细胞。Cellpose 使用两个主要创新：一种可逆的转换，将训练集掩模转换为神经网络可以预测的矢量梯度，以及一个大规模的细胞图像分割数据集。此外，对基本方法进行了多个小的改进，累计性能有了显著提高：我们开发了一种方法，使用图像“风格”来改变每个图像上神经网络的计算，验证分割ROI，对多个模型的预测进行平均，将图像调整为相同的对象大小，以及在重叠的图块中平均模型预测。最后，我们介绍了一种新的三维细胞分割方法，它重用了二维模型，并且不需要新的三维标记数据。")]),t._v(" "),a("p",[t._v("我们的分割方法允许任何人为自己和其他人贡献新的训练数据来改进 Cellpose。我们鼓励用户贡献几个相同类型的手动分割图像，我们将使用这些图像定期重新训练单个通用的 Cellpose 模型供社区使用。Cellpose 具有高表达能力和高容量，可以分割具有复杂突起的细胞，如细长的树突，甚至是非细胞物体，如岩石和水母。因此，我们预计 Cellpose 将成功地融合具有类似于细胞图像的新训练数据，并由类似物体组成。我们的初步测试表明，将不寻常的、非生物图像包含在训练集中，特别有助于对样本外图像的泛化。然而，对样本外数据的泛化是神经网络的一个臭名昭著的难题（for example, Fig. 4e），需要更多的工作来最好地利用新类型的训练数据。")]),t._v(" "),a("p",[t._v("我们的目标是开发适用于 2D 和 3D 分割的通用算法，但也可以对特殊类型的数据进行 Cellpose 的训练，例如冷冻电镜图像，只要有大量的训练数据集。同样，Cellpose 的 3D 版本可以直接在 3D 基准数据集上进行训练，这可能会产生更好的性能。Cellpose 的其他扩展也是可能的，例如对细胞跟踪的处理，这可以通过向空间梯度维度添加“时间梯度”维度来解决。最后，进一步的算法改进可以针对低凸度细胞进行，这些细胞被所有算法的分割效果最差（Fig. 5d）。结合新的组织学方法，例如空间转录组学，Cellpose 具有促进和启用可重复且可扩展到大数据集的定量单细胞生物学新方法的潜力。")]),t._v(" "),a("h2",{attrs:{id:"extended-data-figure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-figure"}},[t._v("#")]),t._v(" Extended Data Figure")]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-1-graphical-user-interface-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-1-graphical-user-interface-gui"}},[t._v("#")]),t._v(" Extended Data Fig.1 Graphical User Interface (GUI)")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig7_ESM.jpg?as=webp",alt:"Extended Data Fig.1"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.1 图形用户界面（GUI）")]),t._v(" "),a("p",[t._v('GUI 中显示的是来自测试集的图像，放大到感兴趣的区域，并使用 Cellpose 进行分割。这个 GUI 有两个主要目的：（1）轻松在新图像上运行 Cellpose "开箱即用"，并在交互模式下可视化结果；（2）手动分割新图像，为 Cellpose 提供训练数据。图像视图可以在 image channel、cellpose vector flows 和 cellpose predicted pixel probabilities 之间进行改变。类似地，可以在 outlines、transparent masks、both 之间更改 mask 覆盖。大小校准程序可以运行来估计细胞大小，或者用户可以直接输入细胞直径，通过显示红色磁盘的图像叠加来辅助视觉校准。密集、完整的手动分割可以上传到我们的服务器上，只按一个按钮，最新的训练模型可以从下拉菜单下载。')])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-2-effect-of-network-architecture-and-training-set-exclusions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-2-effect-of-network-architecture-and-training-set-exclusions"}},[t._v("#")]),t._v(" Extended Data Fig.2 Effect of network architecture and training set exclusions")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig8_ESM.jpg?as=webp",alt:"Extended Data Fig.2"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.2 网络体系结构和训练集排除的效果")]),t._v(" "),a("p",[a("strong",[t._v("a-d.")]),t._v(" 每个分析比较了平均精度相对于标准的 4-network average，full Cellpose architecture。已进行了以下更改："),a("br"),t._v(" "),a("strong",[t._v("a.")]),t._v(" 移除样式向量。"),a("br"),t._v(" "),a("strong",[t._v("b.")]),t._v(" 用标准的卷积层替换了残余块。"),a("br"),t._v(" "),a("strong",[t._v("c.")]),t._v(" 在上采样通道上用串联替换了加法。"),a("br"),t._v(" "),a("strong",[t._v("d.")]),t._v(" 标准 Unet 体系结构 (in other words a, b and c combined)。"),a("br"),t._v(" "),a("strong",[t._v("e.")]),t._v(" 通用 Cellpose 模型的广义数据的性能，以及没有专门数据训练的模型版本。")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-3-prediction-of-median-object-diameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-3-prediction-of-median-object-diameter"}},[t._v("#")]),t._v(" Extended Data Fig.3 Prediction of median object diameter")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig9_ESM.jpg?as=webp",alt:"Extended Data Fig.3"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.3 物体中值直径的预测")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-4-example-stardist-segmentations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-4-example-stardist-segmentations"}},[t._v("#")]),t._v(" Extended Data Fig.4 Example Stardist segmentations")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig10_ESM.jpg?as=webp",alt:"Extended Data Fig.4"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.4 Stardist 的分割示例")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-5-example-mask-r-cnn-segmentations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-5-example-mask-r-cnn-segmentations"}},[t._v("#")]),t._v(" Extended Data Fig.5 Example Mask R-CNN segmentations")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig11_ESM.jpg?as=webp",alt:"Extended Data Fig.5"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.5 Mask R-CNN 的示例分割")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-6-other-performance-metrics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-6-other-performance-metrics"}},[t._v("#")]),t._v(" Extended Data Fig.6 Other performance metrics")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig12_ESM.jpg?as=webp",alt:"Extended Data Fig.6"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.6 其他性能指标")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-7-benchmarks-for-dataset-of-nuclei"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-7-benchmarks-for-dataset-of-nuclei"}},[t._v("#")]),t._v(" Extended Data Fig.7 Benchmarks for dataset of nuclei")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig13_ESM.jpg?as=webp",alt:"Extended Data Fig.7"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.7 细胞核数据集的基准测试")])]),t._v(" "),a("h3",{attrs:{id:"extended-data-fig-8-example-cellpose-segmentations-for-nuclei"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-data-fig-8-example-cellpose-segmentations-for-nuclei"}},[t._v("#")]),t._v(" Extended Data Fig.8 Example cellpose segmentations for nuclei")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://media.springernature.com/full/springer-static/esm/art%3A10.1038%2Fs41592-020-01018-x/MediaObjects/41592_2020_1018_Fig14_ESM.jpg?as=webp",alt:"Extended Data Fig.8"}})]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("Extended Data Fig.8 细胞核的 Cellpose 分割示例")])])])}),[],!1,null,null,null);e.default=i.exports}}]);