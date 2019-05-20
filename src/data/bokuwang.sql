/*
Navicat MySQL Data Transfer

Source Server         : newEgg
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : bokuwang

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-19 22:28:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodslist
-- ----------------------------
DROP TABLE IF EXISTS `goodslist`;
CREATE TABLE `goodslist` (
  `gid` varchar(255) NOT NULL,
  `imgurl` varchar(255) DEFAULT NULL,
  `bookname` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `price2` varchar(255) DEFAULT NULL,
  `collection` int(11) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `timer` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodslist
-- ----------------------------
INSERT INTO `goodslist` VALUES ('001', 'images/001.jpg', '时间简史(插图版)', '32.57', '45', '9999', '科学历史', null);
INSERT INTO `goodslist` VALUES ('002', 'images/002.jpg', '上下五千年', '29', '58', '9900', '科学历史', null);
INSERT INTO `goodslist` VALUES ('003', 'images/003.jpg', '中国历史政治得失', '49', '58', '9801', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('004', 'images/004.jpg', '小山雀,明白了', '15', '25.36', '9702', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('005', 'images/005.jpg', '小小鸭的世界', '33', '55', '9603', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('006', 'images/006.jpg', '全球通史', '48', '96', '9504', '科学历史', null);
INSERT INTO `goodslist` VALUES ('007', 'images/007.jpg', '袁腾飞说历史', '102', '169', '9405', '科学历史', null);
INSERT INTO `goodslist` VALUES ('008', 'images/008.jpg', '森林的迎新会', '22.22', '40.32', '9306', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('009', 'images/009.jpg', '中国大历史', '56.3', '86.43', '9207', '科学历史', null);
INSERT INTO `goodslist` VALUES ('010', 'images/010.jpg', '耶路撒冷三千年', '14.9', '68', '9108', '科学历史', null);
INSERT INTO `goodslist` VALUES ('011', 'images/011.jpg', '森林的12个月', '27.9', '49.57', '9009', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('012', 'images/012.jpg', '人类的群星闪耀', '40.9', '31.14', '8910', '科学历史', null);
INSERT INTO `goodslist` VALUES ('013', 'images/013.jpg', '奇趣大自然系列', '53.9', '60', '8811', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('014', 'images/014.jpg', '森林的朋友圈', '66.9', '88.86', '8712', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('015', 'images/015.jpg', '世界小史', '79.9', '117.72', '8613', '科学历史', null);
INSERT INTO `goodslist` VALUES ('016', 'images/016.jpg', '饥饿的盛世', '92.9', '146.58', '8514', '科学历史', null);
INSERT INTO `goodslist` VALUES ('017', 'images/017.jpg', '森林的远足', '105.9', '175.44', '8415', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('018', 'images/018.jpg', '原始森林的老树', '118.9', '204.3', '8316', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('019', 'images/019.jpg', '森林里的白天', '12.57', '35', '8217', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('020', 'images/020.jpg', '全球通史', '32.57', '55', '8118', '科学历史', null);
INSERT INTO `goodslist` VALUES ('021', 'images/021.jpg', '神秘大自然', '52.57', '75', '8019', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('022', 'images/022.jpg', '森林里岁月', '72.57', '95', '7920', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('023', 'images/023.jpg', '人类简史', '92.57', '115', '7821', '科学历史', null);
INSERT INTO `goodslist` VALUES ('024', 'images/024.jpg', '明朝那些事儿', '112.57', '135', '7722', '科学历史', null);
INSERT INTO `goodslist` VALUES ('025', 'images/025.jpg', '当年明月儿', '132.57', '155', '7623', '科学历史', null);
INSERT INTO `goodslist` VALUES ('026', 'images/026.jpg', '诸神踪迹', '152.57', '175', '7524', '科学历史', null);
INSERT INTO `goodslist` VALUES ('027', 'images/027.jpg', '凯尔特神话', '172.57', '195', '7425', '科学历史', null);
INSERT INTO `goodslist` VALUES ('028', 'images/028.jpg', '史记', '192.57', '215', '7326', '科学历史', null);
INSERT INTO `goodslist` VALUES ('029', 'images/029.jpg', '金一南.苦难辉煌', '212.57', '235', '7227', '科学历史', null);
INSERT INTO `goodslist` VALUES ('030', 'images/030.jpg', '万历十五年', '25.78', '35.23', '7128', '科学历史', null);
INSERT INTO `goodslist` VALUES ('031', 'images/031.jpg', '全球的历史', '32.57', '45', '7029', '科学历史', null);
INSERT INTO `goodslist` VALUES ('032', 'images/032.jpg', '大英博物馆出品', '39.36', '54.77', '6930', '科学历史', null);
INSERT INTO `goodslist` VALUES ('033', 'images/033.jpg', '极简欧洲史', '46.15', '64.54', '6831', '科学历史', null);
INSERT INTO `goodslist` VALUES ('034', 'images/034.jpg', '未来简史', '52.94', '74.31', '6732', '科学历史', null);
INSERT INTO `goodslist` VALUES ('035', 'images/035.jpg', '芳华', '59.73', '84.08', '6633', '科学历史', null);
INSERT INTO `goodslist` VALUES ('036', 'images/036.jpg', '儒林外史', '50.78', '60.23', '6534', '科学历史', null);
INSERT INTO `goodslist` VALUES ('037', 'images/037.jpg', '中国通史', '78.9', '80.34', '6435', '科学历史', null);
INSERT INTO `goodslist` VALUES ('038', 'images/038.jpg', '近代社会新陈代谢', '107.02', '115.45', '6336', '科学历史', null);
INSERT INTO `goodslist` VALUES ('039', 'images/039.jpg', '中国的游牧文明', '135.14', '150.56', '6237', '科学历史', null);
INSERT INTO `goodslist` VALUES ('040', 'images/040.jpg', '盛世与没落', '163.26', '185.67', '6138', '科学历史', null);
INSERT INTO `goodslist` VALUES ('041', 'images/041.jpg', '帝国青春期', '191.38', '220.78', '6039', '科学历史', null);
INSERT INTO `goodslist` VALUES ('042', 'images/042.jpg', '南朝风云', '219.5', '255.89', '5940', '科学历史', null);
INSERT INTO `goodslist` VALUES ('043', 'images/043.jpg', '戊戌变法', '11.35', '35.67', '5841', '科学历史', null);
INSERT INTO `goodslist` VALUES ('044', 'images/044.jpg', '南渡北归系列', '32.57', '65', '5742', '科学历史', null);
INSERT INTO `goodslist` VALUES ('045', 'images/045.jpg', '南渡北归丛书', '53.79', '94.33', '5643', '科学历史', null);
INSERT INTO `goodslist` VALUES ('046', 'images/046.jpg', '森林里的奇妙', '75.01', '123.66', '5544', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('047', 'images/047.jpg', '北美草原', '96.23', '152.99', '5445', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('048', 'images/048.jpg', '宫崎市定', '117.45', '182.32', '4046', '科学历史', null);
INSERT INTO `goodslist` VALUES ('049', 'images/049.jpg', '森林四季漫步', '138.67', '211.65', '2647', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('050', 'images/050.jpg', '极简世界史', '159.89', '240.98', '1248', '科学历史', null);
INSERT INTO `goodslist` VALUES ('051', 'images/051.jpg', '国家是怎样炼成的', '32.23', '40', '1002', '科学历史', null);
INSERT INTO `goodslist` VALUES ('052', 'images/052.jpg', '大明皇朝七张面孔', '62.6', '70.46', '756', '科学历史', null);
INSERT INTO `goodslist` VALUES ('053', 'images/053.jpg', '大英博物馆丛书', '92.97', '100.92', '510', '科学历史', null);
INSERT INTO `goodslist` VALUES ('054', 'images/054.jpg', '五四的思想世界', '123.34', '131.38', '264', '科学历史', null);
INSERT INTO `goodslist` VALUES ('055', 'images/055.jpg', '自由的声音', '153.71', '161.84', '18', '科学历史', null);
INSERT INTO `goodslist` VALUES ('056', 'images/056.jpg', '中国村落', '184.08', '192.3', '50', '科学历史', null);
INSERT INTO `goodslist` VALUES ('057', 'images/057.jpg', '宋朝2', '214.45', '222.76', '82', '科学历史', null);
INSERT INTO `goodslist` VALUES ('058', 'images/058.jpg', '他们的明朝.探明', '244.82', '253.22', '114', '科学历史', null);
INSERT INTO `goodslist` VALUES ('059', 'images/059.jpg', '道路与选择', '275.19', '283.68', '146', '科学历史', null);
INSERT INTO `goodslist` VALUES ('060', 'images/060.jpg', '战国策', '29.35', '67.9', '178', '科学历史', null);
INSERT INTO `goodslist` VALUES ('061', 'images/061.jpg', '经典政廖', '12.34', '53.9', '210', '科学历史', null);
INSERT INTO `goodslist` VALUES ('062', 'images/062.jpg', '希腊史纲', '30', '49', '242', '科学历史', null);
INSERT INTO `goodslist` VALUES ('063', 'images/063.jpg', '奇妙森林系列', '5', '15.67', '274', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('064', 'images/064.jpg', '田园里的躲猫猫', '10', '22.23', '306', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('065', 'images/065.jpg', '一天天的长大', '22.77', '40.66', '338', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('066', 'images/066.jpg', '带刺的小面包', '66', '70', '370', '儿童科教', null);
INSERT INTO `goodslist` VALUES ('067', 'images/067.jpg', '漫画中国史', '30', '40', '402', '科学历史', null);
INSERT INTO `goodslist` VALUES ('068', 'images/068.jpg', '唐朝超越指南', '29.33', '47.99', '434', '科学历史', null);

-- ----------------------------
-- Table structure for mycart
-- ----------------------------
DROP TABLE IF EXISTS `mycart`;
CREATE TABLE `mycart` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(6) NOT NULL,
  `gid` varchar(6) NOT NULL,
  `imgurl` varchar(255) NOT NULL,
  `bookname` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `type` varchar(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `qty` int(6) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=MyISAM AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mycart
-- ----------------------------
INSERT INTO `mycart` VALUES ('17', '1', '004', 'images/004.jpg', '小山雀,明白了', '15.00', '儿童科教', '2019-05-19 17:40:14', '3');
INSERT INTO `mycart` VALUES ('18', '1', '001', 'images/001.jpg', '时间简史(插图版)', '32.57', '科学历史', '2019-05-19 22:28:02', '5');
INSERT INTO `mycart` VALUES ('16', '1', '008', 'images/008.jpg', '森林的迎新会', '22.22', '儿童科教', '2019-05-19 17:40:04', '3');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uname` varchar(11) NOT NULL,
  `upwd` varchar(255) NOT NULL,
  `timer` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`uname`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('13420108226', '123456', '2019-05-13 11:22:53');
INSERT INTO `user` VALUES ('13420108225', '123456', '2019-05-14 15:37:45');
INSERT INTO `user` VALUES ('13420108227', '123456', '2019-05-14 15:41:46');
INSERT INTO `user` VALUES ('13420108220', 'a123456', '2019-05-19 17:06:29');
INSERT INTO `user` VALUES ('13420109226', 'a12345', '2019-05-19 17:26:58');
SET FOREIGN_KEY_CHECKS=1;
