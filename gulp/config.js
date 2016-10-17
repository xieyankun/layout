var src = './src';
var dest = './dist';

module.exports = {
	less: {
        all: src + "/less/**/*.less",  //所有less
        src: src + "/less/*.less",     //需要编译的less
        dest: dest + "/less",　　　　　　 //输出目录
        settings: {　　　　　　　　　　　 //编译less过程需要的配置，可以为空

        }
    },
    sass: {
        all: src + "/sass/**/*.scss",
        src: src + "/sass/*.scss",
        dest: dest + "/sass",
        settings: {

        }
    },
    images: {
    	src: src + "/images/**/*",
    	dest: dest + "/img"
    }
}