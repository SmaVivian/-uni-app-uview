<template>
	<view class="page-order">
		<div class="content u-margin-top-20">
			<h2>
				参观人信息
				<span>（最多3人）</span>
			</h2>
			<ul>
				<li v-for="(item,index) in orderPersonList" :key="index">
				  <span class="name u-line-1">{{item.name}}</span>
				  <span class="code">{{item.identificationNumber}}</span>
				  <div class="btns" style="font-size:12px;">
					<i class="btn btn-edit" @click="edit(index)"></i>
					<i class="btn btn-dele" @click="dele(index)"></i>
				  </div>
				</li>
			</ul>
			<div class="u-text-center u-margin-top-40" v-show="orderPersonList.length<3">
				<!-- <button class="g-btn-primary" size="mini" @click="handleClick">添加参观人</button> -->
				<u-button type="primary" shape="circle" size="medium" @click="handleClick">添加参观人</u-button>
				<p class="tips u-margin-top-20">请确保姓名、证件号填写正确</p>
			</div>
		</div>
		
		<!-- <button class="g-btn-primary" @click="submit">提交预约</button> -->
		<u-button type="primary" shape="circle"" @click="submit">提交预约</u-button>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	export default {
		computed: {
			...mapGetters(['personList', 'editIndexStr'])
		},
		data() {
			return {
				orderPersonList: [],
				detailId: '',
			}
		},
		onLoad(event) {
			
		},
		methods: {
			handleClick() {
				this.$store.dispatch('app/setEditIndexStr', '')
				this.$u.route({
					url: '/pages/my/my-contact',
					params: {
						source: 1
					}
				})
			},
			dele(index) {
				this.orderPersonList.splice(index, 1)
				// this.$store.dispatch('app/setPersonList', this.personList)
			},
			submit() {
				console.log('data', this.orderPersonList)
			},
			edit() {
				
			}
		}
	}
</script>

<style lang="scss">
.page-order {
	.content {
	    padding: 20px 16px;
	    box-shadow: 0px 3px 10px 0px rgba(173, 179, 191, 0.3);
	    border-radius: 8px;
	    h2 {
	      padding-bottom: 20px;
	      font-size: 16px;
	      border-bottom: dashed 1px $border;
	      color: $color1;
	      span {
	        font-size: 12px;
	        color: $color2;
	      }
	    }
	    ul {
	      li {
	        position: relative;
	        line-height: 36px;
	        padding-right: 60px;
	        font-size: 14px;
	        color: $color2;
	        display: flex;
	        align-items: center;
	        border-bottom: dashed 1px $border;
	        .name {
	          display: inline-block;
	          width: 80px;
	          font-size: 16px;
	          color: $color1;
	        }
	        .btns {
	          position: absolute;
	          width: 60px;
	          right: 0;
	          top: 0;
	          display: flex;
	          align-items: center;
	          height: 100%;
	          padding-left: 5px;
	          box-sizing: border-box;
	          .btn {
	            display: inline-block;
	            width: 16px;
	            height: 16px;
	            padding: 3px;
	          }
	          .btn-edit {
	            background: url(~@/static/btn-edit.png) center center no-repeat;
	            background-size: 16px 16px;
	            margin-right: 4px;
	          }
	          .btn-dele {
	            background: url(~@/static/btn-dele.png) center center no-repeat;
	            background-size: 16px 16px;
	          }
	        }
	      }
	    }
	    
		.g-btn-primary {
			display: inline-block;
		}
		
		.tips {
	      text-align: center;
	      font-size: 12px;
	      color: $color3;
	    }
	  }
}
</style>