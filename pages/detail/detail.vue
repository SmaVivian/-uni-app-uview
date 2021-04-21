<template>
	<view class="page-info-detail">
		<view class="head">
			<view class="title">{{detailData.title}}</view>
			<view class="head-info">
				<image :src="detailData.icon || '../../static/museum.svg'" mode=""></image>
				<view class="info-r">
					<view>{{detailData.origin}}</view>
					<view class="time">{{detailData.publish_time | DateFormat('yyyy-MM-dd')}}</view>
				</view>
			</view>
		</view>
		
		<view class="html-detail">
			<!-- todo dele -->
			<!-- <image src="https://d.ifengimg.com/w144_h80_q70/x0.ifengimg.com/ucms/2021_15/8093597E7EF3E1D4CB61199CFEB907E7F9C0C703_size391_w650_h366.png" mode="" style="width:100%;height: 300rpx;"></image> -->
			<rich-text :nodes="richData"></rich-text>
		</view>
		
		<!-- <view class="link">
			<button type="default" @click="viewOriginal">阅读原文</button>
		</view> -->
		
		<view class="footer-share">
			<!-- #ifdef MP-WEIXIN -->
			<button class="share-btn" open-type="share">
				<image src="../../static/wechat.svg" mode=""></image>分享给微信朋友
			</button>
			<!-- <button class="share-btn" @click="sharePoster">
				<image src="../../static/wechat.svg" mode=""></image>生成海报
			</button> -->
			<!-- #endif -->
		</view>
		
		<!-- <qrcode-poster ref="poster" title="这是海报标题这是海报标题这是海报标题" subTitle="副标题" headerImg="https://img.36krcdn.com/20200410/v2_9c3331af67e64994aa97a27fffb1a380_img_png?x-oss-process=image/resize,m_mfit,w_520,h_300/crop,w_520,h_300,g_center" :price="200" abImg="https://img.36krcdn.com/20200411/v2_16417a06088947debe0450950f8fc813_img_png"></qrcode-poster> -->
	</view>
</template>

<script>
	// import QrcodePoster from '@/components/zhangyu-qrcode-poster/zhangyu-qrcode-poster.vue'
	export default {
		// components: { QrcodePoster },
		data() {
			return {
				detailId: '',
				fromData: {},
				detailData: {
					test: '<p>国际劳动妇女节来临之际，吉林省博物院为广大妇女同胞和春城百姓奉献上辛丑牛年的首个原创性书画专题展览</p>'
				},
				richData: ''
			}
		},
		onLoad(event) {
			this.detailData = {}
			this.detailId = event.id
			this.getDetailData()
		},
		methods: {
			// viewOriginal() {
			// 	window.open('http://www.baidu.com')
			// },
			//分享海报
			sharePoster(){
				//获取带参数二维码并传递
				this.$refs.poster.showCanvas()
			},
			getDetailData() {
				this.$u.get('/v1/article/load_article_info', {
					articleId: this.detailId
					// articleId: '86'
				})
				.then(res => {
					// uni.showToast({
					// 	title: res.errorMessage || '服务器异常',
					// 	duration: 2000,
					// 	icon: 'none'
					// });
					this.detailData = res.data || {}
					let richtext= res.data.content && res.data.content.content || '';
					// richtext = richtext.replace(/<img src="\/[^>]*>/gi, '') // 过滤掉所有<img src="/开头的图片标签， 因为/开头的路径无法显示
					// const regex = new RegExp('<img', 'gi');
					// this.richData = richtext.replace(regex, `<img style="max-width: 100%;"`);
					// richtext.replace(/\<img/gi, '<img style="display:-webkit-box;width:355px !important;margin:10px auto !important;" ')
					this.richData = richtext.replace(/\<img/gi, '<img class="richImg"')
					// todo dele
					// this.richData = this.richData.replace(/\<br\>/gi, '<img class="richImg" src="https://d.ifengimg.com/w640_h360_q70/x0.ifengimg.com/ucms/2021_15/A86473542F941346A8AA5F41A7601721CCE1A5B2_size44_w696_h390.jpg">')
				})
				.catch(err => {
					uni.showToast({
						title: err.message || '服务器异常',
						duration: 2000,
						icon: 'none'
					});
				})
			}
		},
		// 分享给好友（发送给朋友）
		onShareAppMessage() {
		    // return {
		    //   title: '自定义转发标题',
		    //   // path: '/index/index?id=123'
		    // }
		},
		// 分享到朋友圈 - 仅支持安卓-待测试
		// onShareTimeline() {
		// 	return {
		// 	    title: "测试小程序朋友圈分享",
		// 	    query: "id=110101&name=heyzqt",
		// 	    imageUrl: "https://example.cn/test.png"
		// 	}
		// },
	}
</script>

<style lang="scss">
.page-info-detail {
	padding: 20rpx 20rpx 140rpx;
	.head {
		.title {
			font-size: 32rpx;
			color: #000;
		}
		.head-info {
			margin: 30rpx 0;
			display: flex;
			align-items: center;
			image {
				width: 64rpx;
				height: 64rpx;
				border-radius: 100%;
				margin-right: 10rpx;
			}
			.info-r {
				font-size: 28rpx;
				line-height: 32rpx;
				color: #7F7F7F;
				.time {
					font-size: 24rpx;
				}
			}
		}
	}
	
	.html-detail {
		position: relative;
		font-size: 28rpx;
		line-height: 50rpx;
		color: #000;
		.richImg {
			display: -webkit-box;
			margin: 0 auto !important;
			max-width: 100% !important;
			object-fit: cover;
			// max-width: calc(100% - 4em) !important;
		}
	}
	
	// .link {
	// 	button {
	// 		margin-top: 40rpx;
	// 		background-color: #efefef;
	// 		color: #0080FF;
	// 		font-size: 28rpx;
	// 		line-height: 88rpx;
	// 		height: 88rpx;
	// 		&:after {
	// 			border: none;
	// 		}
	// 	}
	// }
	
	.footer-share {
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 120rpx;
		box-shadow: 0 1px 2px #333333; 
		// display: flex;
		// align-items: center;
		// justify-content: center;
		// box-shadow: 0 -1px 2px #000000; 
		// box-shadow: 0 -1px 2px #00000019; 
		// box-shadow: 0 2px 9px 4px #3e3e3e1a;
		// box-shadow: 0px -1px 2px #00000019;
		// box-shadow: 0px -1px 2px rgb(0 0 0 / 10%);
		image {
			width: 50rpx;
			height: 50rpx;
			margin-right: 10rpx;
		}
		/* 修改按钮样式 */
		button.share-btn {
			flex: 1;
			height: 100%;
			// padding-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			color: #333;
			&:after {
				border: none;
			}
		}
	}
	
	// 海报
	// .share{
	//     position: fixed;
	//     color: #FFFFFF;
	//     right: 0;
	//     bottom: 190rpx;
	//     background: linear-gradient(to bottom right, #FE726B, #FE956B);
	//     padding: 10rpx 10rpx 10rpx 20rpx;
	//     border-top-left-radius: 50px;
	//     border-bottom-left-radius: 50px;
	//     box-shadow: 0 0 20upx rgba(0,0,0,.09);
	// }
	.cancel{
	  width: 100vw;
	  padding: 30rpx;
	  text-align: center;
	  background: #FFFFFF;
	  color: red;
	  font-weight: bold;
	  font-size: 30rpx;
	}
	.md-content{ 
	  display: flex;
	  flex-direction: row;
	  justify-content: center;
	  align-items: center;
	  padding: 50rpx 0;
	}
	.md-content-item{
	  margin: 0 70rpx;
	  position: relative;
	}
	.md-content-item image{
	  width: 100rpx;
	  height: 100rpx;
	}
	.md-content-item view{
	  margin-top: 15rpx;
	  font-size: 28rpx;
	}
	.sharebtn{
	  position: absolute;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  opacity: 0;
	}
}
</style>
