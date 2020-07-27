// 用于管理整个项目的图片资源：1，远程图片，2public中的图片 3，assets目录的团片

import shoppImg from "@/assets/images/1.png"
import uploadIcon from "@/assets/images/imgIcon.png"


export default {
    shoppImg,
    uploadIcon,
    // 图片服务地址，与api服务器没有任何关系
    uploadUrl:"http://localhost:3000"
}