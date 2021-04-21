<template>
	<view class="page-order-pre">
		<view class="" @click="handleLoc">
			直接导航
		</view>
		<!-- todo dele -->
		<view class="" @click="goMap">
			地图显示页面
		</view>
		
		<!-- #ifdef MP-ALIPAY -->
		<button type="default" @click="getAuthCode">
		  获取授权码
		</button>
		
		<button
		  type="primary"
		  open-type="getAuthorize"
		  scope="userInfo"
		  @getAuthorize="onGetAuthorize"
		  @error="onAuthError"
		>
		  会员基础信息授权
		</button>
		
		<button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">获取手机号</button>
		<!-- #endif -->
		
		<view class="footer-box">
		  <!-- <button class="g-btn-primary" @click="showSheet">我已知晓并同意，开始预约</button> -->
		  <u-button type="primary" shape="circle" @click="showSheet">我已知晓并同意，开始预约</u-button>
		</view>
		
		<u-popup v-model="show" length="60%" mode="bottom" :closeable="true" close-icon-pos="top-right">
			<view class="sheet-box">
				<view class="date-content">
					<view class="sheet-title">选择参观日期</view>
					<view class="date-box">
						<view
						  class="date-item"
						  :class="{'active': item.times===activeItem.times,'gray': item.openState==='0' || (item.openState==='1'&&item.surplusSum<=0)}"
						  v-for="(item, index) in dataList"
						  :key="index"
						  @click="handleClickDate(item)"
						>
							<text>{{item.times | DateFormat('MM月dd日')}}</text>
							<text class="u-margin-top-10" v-if="item.openState==='0'">闭馆</text>
							<text class="u-margin-top-10" v-if="item.openState==='1'&&item.surplusSum===0">售罄</text>
							<text class="u-margin-top-10" v-if="item.openState==='1'&&item.surplusSum=== -1">停止入馆</text>
							<text class="u-margin-top-10" v-if="item.openState==='1'&&item.surplusSum>0">余{{item.surplusSum}}</text>
						</view>
					</view>
			
					<view class="sheet-title">选择参观时段</view>
					<view class="date-box date-box2 bottom mb-10">
						<view
							class="date-item"
							:class="{'active': it.settingTimesId === settingTimesId,'gray': activeItem.openState==='0' || (activeItem.openState==='1'&&it.surplusSum<=0)}"
							v-for="(it, index) in activeItem.sum"
							:key="index"
							@click="handleSel(it)"
						>
							<text>{{it.timesStr}}</text>
							<text class="u-margin-top-10" v-if="activeItem.openState==='0'">闭馆</text>
							<text class="u-margin-top-10" v-if="activeItem.openState==='1'&&it.surplusSum===0">售罄</text>
							<text class="u-margin-top-10" v-if="activeItem.openState==='1'&&it.surplusSum=== -1">停止入馆</text>
							<text class="u-margin-top-10" v-if="activeItem.openState==='1'&&it.surplusSum>0">余{{it.surplusSum}}</text>
						</view>
					</view>
				</view>

				<view class="footer">
					<!-- <button class="g-btn-primary" :disabled="!settingTimesId" type="p" @click="goOrder">立即预约</button> -->
					<u-button type="primary" shape="circle" :disabled="!settingTimesId" @click="goOrder">立即预约</u-button>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {		
				detailId: '',
				show: false,
				activeItem: {
					date: 1,
					time: '1',
					
					// todo dele
					openState: '1',
					sum: [
						{
							timesStr: '2012-02-06',
							surplusSum: 99
						}
					]
				},
				settingTimesId: '1', // 时间段id
				timesStr: '', // 时间段字符串
				// amOrPm: '', // 上午还是下午  1-上午 2-下午
				detailData: {},
				dataList: [
					{
						openState: '1', 
						surplusSum: 80,
					},
				],
			}
		},
		onLoad(event) {
			this.detailData = {}
			this.detailId = event.id
			this.getDetailData()
			
			// 获取定位
			uni.getLocation({
				// type: 'wgs84', // 默认  114.30525 30.59276
				type: 'gcj02', // 国测局坐标 可用于 uni.openLocation 的坐标
				success: function (res) {
					console.log('当前位置的经度：' + res.longitude);
					console.log('当前位置的纬度：' + res.latitude);
				}
			})
		},
		methods: {
			// 授权成功回调
			onGetAuthorize() {
			  my.getOpenUserInfo({
			    fail: res => {
			      console.log(res);
			    },
			    success: res => {
			      const userInfo = JSON.parse(res.response).response; // 以下方的报文格式解析两层 response
			      my.alert({
			        content: userInfo,
			      });
			    },
			  });
			},
			// 授权失败回调
			onAuthError() {
			  uni.showToast({
			    title: "授权失败回调1"
			  });
			},
			decryptPhoneNumber() {
				my.getPhoneNumber({
					scopes: "auth_user",
					success: res => {
						var resData = JSON.parse(res.response);
						console.log('res',resData)
					// 	my.request({
					// 		url: '你的后端服务端',
				 
					// 		data: encryptedData,
					// 	});
					},
					fail: res => {
						uni.showToast({
							title: "需要您授权手机号码哦~",
							icon: 'none',
							duration: 2000
						})
					}
				});
			},
			// 获取授权码
			getAuthCode() {
				my.getAuthCode({
				  scopes: 'auth_user',
				  success: ({ authCode }) => {
					my.alert({
					  content: authCode,
					});
				  },
				});
			},
			getDetailData() {
				
			},
			showSheet() {
				this.show = true
				// this.$refs.popupShare.open()
			},
			change() {
				console.log(1)
			},
			handleClickDate() {
				
			},
			handleSel() {
				
			},
			goOrder() {
				if (!this.settingTimesId) {
					this.$toast('请选择时段')
					return
				}
				this.$u.route({
					url: '/pages/order/order',
					params: {
						id: 1
					}
				})
			},
			goMap() {
				this.$u.route({
					url: '/pages/map/map',
					params: {
						id: 1
					}
				})
			},
			// 导航
			handleLoc() {
				uni.openLocation({
					latitude: 39.909,//要去的纬度-地址       
					longitude: 116.39742,//要去的经度-地址
					name: '北京2',//地址名称
					address: '北京天安门',//详细地址名称
					success: function () {
					   console.log('导航成功');
					},
					fail:function(error){
						console.log(error)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
.page-order-pre {
	.footer-box {
		padding: 10rpx 16rpx;
		width: 100%;
		box-sizing: border-box;
		position: fixed;
		bottom: 20rpx;
		left: 0;
		.btn-order {
			color: #fff;
			background-color: $uni-color-primary;
			border-radius: 50rpx;
			&:hover {
				opacity: 0.8;
			}
		}
	}
	
	.sheet-box {
		position: absolute;
		width: 100%;
		bottom: 0;
	    padding-top: 0;
	    padding-bottom: 140rpx;
	    font-size: 28rpx;
	    color: $color2;
		background: #fff;
	    .date-box {
			margin-left: -20rpx;
			padding: 0 32rpx;
			display: flex;
			flex-wrap: wrap;
			.date-item {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				margin-top: 40rpx;
				margin-left: 20rpx;
				box-sizing: border-box;
				width: 156rpx;
				height: 120rpx;
				border-radius: 16rpx;
				box-shadow: 0rpx 6rpx 20rpx 0rpx rgba(173, 179, 191, 0.3);
				&.active {
					background: $uni-color-primary;
					color: #fff;
				}
				&.gray {
					background: #f0f2f5;
					color: $color3;
				}
			}
			&.bottom {
			}
	    }
	    .date-box2 {
			margin-left: -40rpx;
			.date-item {
				width: 200rpx;
				margin-left: 40rpx;
			}
	    }
	
	    .sheet-title {
			padding-left: 30rpx;
			margin-top: 40rpx;
			padding-top: 40rpx;
			border-top: dashed 2rpx $uni-border-color;
			&:first-child {
				border-top: none;
			}
	    }
	
	    .footer {
			width: 100%;
			// height: 44rpx;
			position: absolute;
			bottom: 30rpx;
			left: 0;
			// margin-top: 10rpx;
			padding: 0 32rpx;
			box-sizing: border-box;
	    }
	}
}
</style>
