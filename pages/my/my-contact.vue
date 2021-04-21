<template>
	<!-- 我的联系人 -->
	<view class="page-my-contact">
		<view class="list">
			<view class="item" v-for="(item, index) in personList" :key="index" @click="checkAddress(item)">
				<text @click.stop="addAddress('edit', item)">编辑</text>
				<view class="person-wrap u-margin-left-10">
					<view class="title-box">
						<text v-if="item.default" class="tag">默认</text>
						<text class="person">{{item.name}}</text>
					</view>
					<view class="info-box">
						<text>{{item.phone}}}</text>
					</view>
				</view>
				
				<u-icon :name="item.checked?'checkmark-circle-fill':'checkmark-circle'" color="#bd1b2d" size="40" @click="toggleCheck(item)"></u-icon>
			</view>
		</view>
		
		<!-- <button class="g-btn-primary u-margin-top-40" @click="addAddress('add')">新增联系人</button> -->
		<view class="u-margin-top-40">
			<u-button type="primary" shape="circle" @click="addAddress('add')">新增联系人</u-button>
		</view>
		
		
		<!-- <button class="g-btn-primary u-margin-top-40" @click="sure">确定</button> -->
		<view class="u-margin-top-40">
			<u-button type="primary" shape="circle" @click="sure">确定</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				personList: []
			}
		},
		onLoad(event){
			console.log(event.source)
			this.source = event.source // 从预约页面而来
			this.getDataList()
			// if(this.source == 1) {
			// 	// 从预约页面而来
			// 	if(this.$api.prePage().orderPersonList.length) {
			// 		this.personList = this.$api.prePage().orderPersonList
			// 	} else {
			// 		this.getDataList()
			// 	}
			// }
		},
		methods: {
			getDataList() {
				this.personList = [
					{
						default: true,
						name: '张三',
						phone: 13521452145,
						checked: true
					},
					{
						name: '李四',
						phone: 13521452145,
						checked: false  // 必须 否则初始化为空时选中有问题
					},
					{
						name: '王五',
						phone: 13521452145,
						checked: false  // 必须 否则初始化为空时选中有问题
					},
				]
				
				if(this.source == 1) {
					// 从预约页面而来 带入人员
					let arr = this.$api.prePage().orderPersonList
					if(arr.length) {
						this.personList.forEach(it => {
							this.$set(it, 'checked', false)
						})
						arr.forEach(item => {
							this.personList.forEach(it => {
								if(it.name === item.name) {
									this.$set(it, 'checked', true)
								}
							})
						})
						console.log(this.personList)
						// this.personList = this.$api.prePage().orderPersonList
					}
				}
			},
			//选择地址
			checkAddress(item){
				// if(this.source == 1){
				// 	//this.$api.prePage()获取上一页实例，在App.vue定义
				// 	this.$api.prePage().addressData = item;
				// 	uni.navigateBack()
				// }
			},
			addAddress(type, item){
				if(type === 'edit') {
					// uni.navigateTo({
					// 	url: `/pages/order/order-add?type=${type}&data=${JSON.stringify(item)}`
					// })
					this.$u.route({
						url: '/pages/order/order-add',
						params: {
							type: type,
							data: JSON.stringify(item)
						}
					})
				} else {
					// uni.navigateTo({
					// 	url: `/pages/order/order-add?type=${type}`
					// })
					this.$u.route({
						url: '/pages/order/order-add',
						params: {
							type: type
						}
					})
				}
				// uni.navigateTo({
				// 	url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
				// })
			},
			//添加或修改成功之后回调
			refreshList(data, type){
				//添加或修改后事件，这里直接在最前面添加了一条数据，实际应用中直接刷新地址列表即可
				// this.addressList.unshift(data);
				
				// console.log(data, type);
			},
			toggleCheck(item) {
				this.$set(item, 'checked', !item.checked)
				console.log(item)
				// this.$set(this.personList[index], 'checked', !item.cheked)
				// item.checked = booleanVal
				console.log(this.personList)
			},
			// todo dele
			// 复选框变化
			checkboxChange(e, index) {
				// console.log(e, index)
				// let values = e.detail.value
				// for (let i = 0; i < this.personList.length; i++) {
				// 	const item = this.personList[i]
				// 	if(values.includes(item.value)){
				// 		this.$set(item, 'checked', true)
				// 	}else{
				// 		this.$set(item, 'checked', false)
				// 	}
				// }
			},
			sure() {
				let selPersonList = this.personList.filter(item => item.checked)
				
				if(this.source == 1){
					this.$api.prePage().orderPersonList = selPersonList
					uni.navigateBack()
				}
			}
		}
	}
</script>

<style lang="scss">
.page-my-contact {
	.list {
		.item {
			display: flex;
			align-items: center;
			padding: 20rpx 30rpx;;
			background: #fff;
			position: relative;
			.person-wrap {
				display: flex;
				flex-direction: column;
				flex: 1;
				.title-box {
					display: flex;
					align-items: center;
					.tag{
						font-size: 24rpx;
						// color: $base-color;
						margin-right: 10rpx;
						background: #fffafb;
						border: 1px solid #ffb4c7;
						border-radius: 4rpx;
						padding: 4rpx 10rpx;
						line-height: 1;
					}
					.person{
						font-size: 30rpx;
						// color: $font-color-dark;
					}
				}
			}
			// .icon-check {
			// 	&.check {
			// 		color: red;
			// 	}
			// }
		}
	}
}
</style>
