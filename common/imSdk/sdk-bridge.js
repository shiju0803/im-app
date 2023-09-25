
/*
 * Copyright (c) ShiJu  2023 - 2023. 适度编码益脑，沉迷编码伤身，合理安排时间，享受快乐生活。
 */

function getIM(){
    //  UNIAPP 环境
    if(typeof uni !== 'undefined'){
        return {im:uni['im'], im_webtoolkit:uni['im_webtoolkit']};
    }
    throw Error(" Couldn't not fetch lim.");
}


const lim = {
    im: getIM().im,
};

module.exports = lim;
