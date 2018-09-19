const MainTitle = 'AGV项目成果平台'; // 网页标题
const ZerothTitle = '首页'; // 导航栏第一个标签
const FirstTitle = '硬件'; // 导航栏第二个标签
const SecondTitle = '导航'; // 导航栏第三个标签
const ThirdTitle = '交互'; // 导航栏第四个标签
const FourthTitle = '成员'; // 导航栏第五个标签

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




