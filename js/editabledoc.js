/*------------------------------------导航栏------------------------------------*/

const MainTitle = 'AGV项目成果平台'; // 网页标题
const ZerothTitle = '首页'; // 导航栏第一个标签
const FirstTitle = '硬件'; // 导航栏第二个标签
const SecondTitle = '导航'; // 导航栏第三个标签
const ThirdTitle = '交互'; // 导航栏第四个标签
const FourthTitle = '成员'; // 导航栏第五个标签



/*------------------------------------首页-------------------------------------*/

const FirstTitleImgURL = './src/carousel_hard.png'; // 首页滚动框第一幅图
/**
 * 首页滚动框第一幅图的文字
 */
const FirstSlideTitle = 'AGV硬件布置';
const FirstSlideContent = 'AGV平台由方钢管焊接制成，平台中部安装一对直流无刷电机差速驱动的主动轮，' +
    '四周采用小脚轮辅助支撑；通过前轮和驱动轮之间的杠杆机构实现小车的爬坡功能；' +
    '对角安装一对面激光雷达完成建图和导航，可架设深度相机完成人体跟踪。';
const FirstSlideButton = '了解更多';

const SecondTitleImgURL = './src/carousel_nav.png'; // 首页滚动框第二幅图
/**
 * 首页滚动框第二幅图的文字
 */
const SecondSlideTitle = 'AGV导航技巧';
const SecondSlideContent = 'AGV导航通过对角线上的面激光传感器完成，通过对室内环境扫描得到静态地图；再' +
    '叠加上移动中获取的动态地图，根据全局和局部两个轨迹规划器的结果选择最佳的路径' +
    '进行导航；而通过设置ROS包内的参数可以使得导航得到更好的效果。';
const SecondSlideButton = '了解更多';

const ThirdTitleImgURL = './src/carousel_web.png'; // 首页滚动框第三幅图
/**
 * 首页滚动框第三幅图的文字
 */
const ThirdSlideTitle = 'AGV交互界面';
const ThirdSlideContent = 'AGV交互界面采用B-S架构完成了具备运动、建图、导航和跟踪等功能的网页端应用平台；' +
    '网页的存取由NodeJs利用HTTP协议实现，而指令的交互由Roslib等库利用WebSocket' +
    '协议实现；界面的布局则借鉴Bootstrap的模板进行设计。';
const ThirdSlideButton = '了解更多';

const FourthTitleImgURL = './src/carousel_mem.png'; // 首页滚动框第四幅图
/**
 * 首页滚动框第四幅图的文字
 */
const FourthSlideTitle = 'AGV项目成员';
const FourthSlideContent = '本项目系上海交通大学机械与动力工程学院“复杂机电”课程项目，项目成员均来自于' +
    '该学院机械工程专业；具有良好的机械软硬件设计和开发能力，在项目中分工完成' +
    '硬件平台搭建、SLAM算法开发、交互界面设计和系统集成调试等任务。';
const FourthSlideButton = '了解更多';


/*------------------------------------硬件-------------------------------------*/

const HardPartFirstBlockTitle = '机械结构'; // 硬件页面首个一级标题
const HardPartFirstBlockFirstSubTitle = '车身结构'; // 硬件页面首个一级标题第一个子标题
const HardPartFirstBlockFirstSubContent = 'AGV平台的框架由规格为30×30mm的方钢管焊接制成，' +
    '车轮布局方案为平台中部安装一对差速驱动的主动轮，四周陪着四个相同规格的小脚轮辅助支撑。' +
    '其中驱动轮有两个独立的直流无刷电机通过减速器驱动。激光雷达通过中间件固连到框架对角的竖直钢管上，' +
    '框架中心安装了一块铝制钣金件用来固定移动平台的附属电器元件。车身的后端安装由锌铁板制成的钣金件用' +
    '来固定并且保护移动机器人的主机，前端通过前轮和驱动轮之间的杠杆机构实现小车的爬坡功能。'; // 硬件页面首个一级标题第一个子内容
const HardPartFirstBlockFirstSubImg = './src/carbody.png'; // 硬件页面首个一级标题第一个子图像
const HardPartFirstBlockSecondSubTitle = '加工装配'; // 硬件页面首个一级标题第二个子标题
const HardPartFirstBlockSecondSubContent = '加工装配采用了设计图纸+委托加工+自行装配的形式完成' +
    '了移动机器人平台的硬件结构部分。为保证尺寸精度和形位公差，方钢管焊接完成之后再精加工装配接口处，' +
    '框架与车体零部件通过螺栓紧固件连接装配。其中旋转运动副采用翻边铜套配合钢制转轴实现紧固部分采用螺栓螺孔配合' +
    '螺纹胶的方式实现。'; // 硬件页面首个一级标题第二个子内容
const HardPartFirstBlockSecondSubImg = './src/assemble.png'; // 硬件页面首个一级标题第二个子图像

const HardPartSecondBlockTitle = '电气设计'; // 硬件页面第二个一级标题
const HardPartSecondBlockFirstSubTitle = '电气原理'; // 硬件页面第二个一级标题第一个子标题
const HardPartSecondBlockFirstSubContent = '整车由一块22Ah的24V锂电池供电，车身电气系统的核心' +
    '为一台Dell的PC主机，两个激光雷达传感器，一个深度相机，两个电机控制器，和一块灯带的Arduino控制板' +
    '都通过USB线与电脑相连。激光雷达，深度相机向PC机返回周围环境信息，PC主机做出决策之后通过向驱动器发' +
    '出控制信号，进而控制车身的运动。同时PC机与一台路由器相连，相关设备可以利用Web网页登陆路由器所在的' +
    '局域网，实现对车身的运动控制功能。'; // 硬件页面第二个一级标题第一个子内容
const HardPartSecondBlockFirstSubImg = './src/elec.png'; // 硬件页面第二个一级标题第一个子图像
const HardPartSecondBlockSecondSubTitle = '实物连接'; // 硬件页面第二个一级标题第二个子标题
const HardPartSecondBlockSecondSubContent = '在电气系统的安装实施过程中，首先根据设计的车身电气系统' +
    '接线图完成了整体的接线工作。同时使用扎带，蛇皮管，理线勾等多种工具对排线进行了整理。同时对相关线材' +
    '使用标签纸进行了标注，方便日后的维修工作。'; // 硬件页面第二个一级标题第二个子内容
const HardPartSecondBlockSecondSubImg = './src/connect.png'; // 硬件页面第二个一级标题第二个子图像

const HardPartThirdBlockTitle = '传感器'; // 硬件页面第三个一级标题
const HardPartThirdBlockFirstSubTitle = '激光雷达'; // 硬件页面第三个一级标题第一个子标题
const HardPartThirdBlockFirstSubContent = '为实现系统的自主导航功能，确定了在车身对角位置安放一对' +
    '激光雷达传感器用于环境感知及地图创建。采用的激光雷达传感器的型号为SLAMTEC-RPLIDARA2，该传感器具有' +
    '8m的扫描范围，通过USB与电脑进行连接。'; // 硬件页面第三个一级标题第一个子内容
const HardPartThirdBlockFirstSubImg = './src/rplidara.png'; // 硬件页面第三个一级标题第一个子图像
const HardPartThirdBlockSecondSubTitle = '深度相机'; // 硬件页面第三个一级标题第二个子标题
const HardPartThirdBlockSecondSubContent = '为实现系统的主动跟随功能，确定了在车身上方架设深度相机' +
    '实现小车对人体的拍摄、识别和定位。采用的深度相机的型号为Intel RealSense-D435，该相机能够同时返回' +
    '深度图像和RGB图像，通过USB与电脑进行连接。'; // 硬件页面第三个一级标题第二个子内容
const HardPartThirdBlockSecondSubImg = './src/realsense.png'; // 硬件页面第三个一级标题第二个子图像












