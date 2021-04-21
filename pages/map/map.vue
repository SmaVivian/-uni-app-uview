<template>
	<view class="page-map">
		<map class="map-box" :latitude="latitude" :longitude="longitude" :markers="covers"></map>
		
		<view class="footer-box">
			<!-- <button class="g-btn-primary" size="mini" @click="handleLoc">导航</button> -->
			<u-button type="primary" shape="circle"" @click="handleLoc">导航</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 39.909,
				longitude: 116.39742,
				covers: [{
					latitude: 39.909,
					longitude: 116.39742,
					iconPath: '../../static/loc.svg'
				}, {
					latitude: 39.90,
					longitude: 116.39,
					iconPath: '../../static/loc.svg'
				}],
			}
		},
		methods: {
			// 导航
			handleLoc() {
				uni.openLocation({
					latitude: this.latitude,//要去的纬度-地址       
					longitude: this.longitude,//要去的经度-地址
					name: '北京',//地址名称
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
.page-map {
	.map-box {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		height: 100%;
	}
	.footer-box {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		padding: 10px;
		background-color: #fff;
	}
}
</style>
