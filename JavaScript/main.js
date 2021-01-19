// JavaScript Document
(function () {
	"use strict";

	$(document).ready(function () {
		$(".weekbtn").on("click", function () {
			$(".weeklist").show();//显示本周排行榜
			$(this).css({
				color: "#FFF",
				backgroundColor: "#333"
			});//设置本周排行榜按钮颜色及背景颜色
			$(".monthlist").hide();//隐藏本月排行榜
			$(".monthbtn").css({
				color: "#333",
				backgroundColor: "#FFF"
			});//设置本月排行榜按钮颜色及背景颜色

		});
		$(".monthbtn").on("click", function () {
			$(".monthlist").show();//显示本月排行榜
			$(this).css({
				color: "#FFF",
				backgroundColor: "#333"
			});//改变本月排行榜按钮颜色及背景颜色
			$(".weeklist").hide();//显示本周排行榜
			$(".weekbtn").css({
				color: "#333",
				backgroundColor: "#FFF"
			});//改变本周排行榜按钮颜色及背景颜色
		});
	});


})();
