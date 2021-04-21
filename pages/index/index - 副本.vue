<template>
	<view class="page-info">
		<!-- <view class="sch">
			<u-search border-color="red" placeholder="搜索" v-model="key" @search="handleSearch"></u-search>
		</view>
		
		<view class="tabs">
			<v-tabs v-model="tabCurrent" :tabs="tabs" :scroll="false" fontSize="32rpx" height="80rpx" bgColor="transparent" color="#333" activeColor="#000" lineColor="#000" lineHeight="5rpx" field="name" @change="changeTab"></v-tabs>
		</view> -->
		
		<!-- 刷新页面后的顶部提示框 -->
		<!-- <view class="tips" :class="{ 'tips-ani': tipShow }">为您更新了{{newCount}}条资讯</view> -->
		<view class="list">
			<view class="item" direction="column" v-for="(item, i) in dataList" :key="i" title="列表文字" @click="goDetail(item)">
				<view class="item-head">
					<view class="item-head-l">
						<image :src="item.icon || '../../static/museum.svg'" mode="aspectFill"></image>
						<text class="item-head-name">{{item.origin}}</text>
					</view>
					<text class="item-head-r">
						{{item.publishTime | DateFormat('yyyy-MM-dd')}}
					</text>
				</view>
				
				<view class="item-body">
					<view class="title ell">{{item.title}}</view>
					<view class="desc three-ell">{{item.flag || ''}}</view>
					<view class="pic-list" v-if="item.images.length">
						<view class="pic-box" :class="'pic-box-'+item.images.length" v-for="(it, i) in item.images" :key="i">
							<!-- 懒加载只针对微信小程序、App、百度小程序、字节跳动小程序有效 -->
							<image class="pic" :src="it" mode="aspectFill" :lazy-load="true" @load="imgLoad"></image>
							<!-- <image class="pic" src="../../static/home.png" mode="aspectFill"></image> -->
						</view>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="loadingType" color="red" icon-color="#333"></u-loadmore>
	</view>
</template>

<script>
	// import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		// components: {uniLoadMore},
		data() {
			return {
				tabCurrent: 0,
				tabVal: '展讯',
				tabs: [{ name: '展讯' }, { name: '活动' }, { name: '研究' }, { name: '资讯' }],
				loadingType: 'loadmore', // loadmore加载前 nomore没有更多了 loading正在加载中
				// tipShow: false,
				currentPage: 1,
				dataList: [],
				newCount: 0,
				key: ''
			}
		},
		onLoad() {
			this.loadingType = 'loading'
			this.getDataList()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.dataList = []
			
			this.currentPage = 1
			// this.loadingType = 'loading'
			this.getDataList('new')
		},
		//加载更多
		onReachBottom() {
			this.currentPage++
			this.getDataList('more');
		},
		methods: {
			changeTab(index) {
				this.tabCurrent = index
				this.tabVal = this.tabs[index].name
				
				this.dataList = []
				this.currentPage = 1
				// this.loadingType = 'loading'
				this.getDataList()
			},
			// todo dele
			imgLoad(e) {
			    // 只需查看本事件触发即可知道image 的加载情况（图片数量可以尽可能的多，触发成功过后就能知道）
			    // 小程序提前加载当前屏幕和下一屏的图片,所以滚动的时候会触发。
			    // console.log(e)
			},
			goDetail(item) {
				uni.navigateTo({
					url: '/pages/order/order-pre?id=' + item.id
				});
			},
			handleSearch() {
				console.log(this.key)
				this.dataList = []
				this.currentPage = 1
				this.getDataList('new')
			},
			getDataList(operate) {
				this.loadingType = 'loading'
				this.$http.get('/vi/article/load', {
					// provinceId: '', // 天津市
					tag: this.tabVal,
					page: this.currentPage,
					size: 10
				})
				.then(res => {
					uni.stopPullDownRefresh()
					res.data.forEach((item, index) => {
						item.images = JSON.parse(item.images).slice(0, 3)
					})
					let data = res.data
					// this.newCount = data.length
					this.loadingType = data.length ? 'loadmore' : 'nomore'
					this.dataList = this.dataList.concat(data)
					// if(operate === 'new') {
					// 	this.tipShow = true
					// 	setTimeout(() => {
					// 		this.tipShow = false
					// 	}, 2000)
					// } else {
					// 	this.tipShow = false
					// }
					// if(this.loadingType === 'nomore') {
					// 	return
					// }
					// if(operate === 'new') {
					// 	this.dataList = data.concat(this.dataList)
					// } else {
					// 	this.dataList = this.dataList.concat(data)
					// }
				})
				.catch(err => {
					this.loadingType = 'loadmore'
					uni.showToast({
						title: err.message || '服务器异常',
						duration: 2000,
						icon: 'none'
					})
				})
			},
		}
	}
</script>

<style lang="scss">
.page-info {
	padding-top: 80rpx;
	.tabs {
		position: fixed;
		top:0;
		z-index: 2;
		width:100%;
		height: 80rpx;
		background-color: #F5F5F5;
	}
	
	.list {
		padding: 10px;
		.item {
			padding: 15px 10px;
			border-radius: 4px;
			background-color: #fff;
			margin-bottom: 20rpx;
			font-size: 28rpx;
			color: #7F7F7F;
			.item-head {
				display: flex;
				align-items: center;
				justify-content: space-between;
				.item-head-l {
					display: flex;
					align-items: center;
					image {
						width: 64rpx;
						height: 64rpx;
						border-radius: 100%;
						margin-right: 10rpx;
					}
				}
			}
			
			.item-body {
				.title {
					margin: 20rpx 0;
					font-size: 32rpx;
					color: #000;
				}
				.desc {
					
				}
				.pic-list {
					margin-top: 20rpx;
					display: flex;
					flex-wrap: wrap;
					justify-content: space-between;
					.pic-box {
						width: 33.33%;
						padding-right: 10rpx;
						box-sizing: border-box;
						.pic {
							width: 100%;
							height: 208rpx;
							flex: 1;
						}
						// 若有多行多列 目前不存在这种情况
						&::after {
							content: '';
							flex: 1;
							height: 0;
						}
						&.pic-box-1 {
							width: 100%;
							.pic {
								height: 300rpx;
							}
						}
						&.pic-box-2 {
							width: 50%;
							.pic {
								height: 260rpx;
							}
						}
						// &.pic-box-3 {
						// 	width: 33.33%;
						// 	.pic {
						// 		height: 105rpx;
						// 	}
						// }
					}
				}
			}
		}
	}
	
	.tips {
		color: #67c23a;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		background-color: #f0f9eb;
		height: 0;
		opacity: 0;
		transform: translateY(-100%);
		// transition: all 0.3s;
		&.tips-ani {
			transform: translateY(0);
			height: 40px;
			opacity: 1;
		}
	}
}
</style>
