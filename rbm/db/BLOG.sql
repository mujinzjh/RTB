/*
 Navicat Premium Data Transfer

 Source Server         : jeepay
 Source Server Type    : MySQL
 Source Server Version : 50715
 Source Host           : localhost:3306
 Source Schema         : BLOG

 Target Server Type    : MySQL
 Target Server Version : 50715
 File Encoding         : 65001

 Date: 20/02/2022 19:12:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for blog_article
-- ----------------------------
DROP TABLE IF EXISTS `blog_article`;
CREATE TABLE `blog_article` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `title` varchar(400) DEFAULT NULL COMMENT '标题',
  `author` varchar(100) NOT NULL COMMENT '作者',
  `des` mediumtext COMMENT '文章描述',
  `content` mediumtext COMMENT '内容',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COMMENT='文章表';

-- ----------------------------
-- Table structure for blog_comment
-- ----------------------------
DROP TABLE IF EXISTS `blog_comment`;
CREATE TABLE `blog_comment` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `article_id` bigint(20) DEFAULT NULL COMMENT '文章ID',
  `nickname` varchar(20) DEFAULT NULL COMMENT '给谁留言',
  `content` text COMMENT '留言内容',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `ip` varchar(20) DEFAULT NULL COMMENT 'IP地址',
  `device` varchar(100) DEFAULT NULL COMMENT '设备',
  `address` varchar(100) DEFAULT NULL COMMENT '地址',
  `create_time` datetime DEFAULT NULL COMMENT '留言时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COMMENT='评论表';

-- ----------------------------
-- Table structure for blog_sys_log
-- ----------------------------
DROP TABLE IF EXISTS `blog_sys_log`;
CREATE TABLE `blog_sys_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '操作管理员名称',
  `operation` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL COMMENT '操作',
  `operation_time` bigint(255) DEFAULT NULL COMMENT '操作时间',
  `status` int(255) DEFAULT NULL COMMENT '日志类型 1为操作日志，2位登录日志',
  `result` varchar(255) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

-- ----------------------------
-- Table structure for blog_user
-- ----------------------------
DROP TABLE IF EXISTS `blog_user`;
CREATE TABLE `blog_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '编号',
  `username` varchar(100) NOT NULL COMMENT '用户名',
  `password` varchar(100) NOT NULL COMMENT '密码',
  `avatar` varchar(200) DEFAULT NULL COMMENT '头像',
  `email` varchar(255) DEFAULT NULL COMMENT '邮箱',
  `des` varchar(100) DEFAULT NULL COMMENT '介绍',
  `create_time` bigint(20) DEFAULT NULL COMMENT '创建时间',
  `admin_type` bigint(20) NOT NULL DEFAULT '1' COMMENT '管理员类型',
  `update_time` bigint(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='用户表';

SET FOREIGN_KEY_CHECKS = 1;
