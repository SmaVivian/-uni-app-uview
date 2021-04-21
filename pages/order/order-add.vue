<template>
	<view class="page-order-add">
		<u-form :model="form" :rules="rules" ref="uForm">
			<u-form-item label="姓名" prop="name">
				<u-input type="text" placeholder="请填写真实姓名" v-model="form.name" />
			</u-form-item>
			
			<u-form-item label="手机号" prop="phone" label-width="130">
				<u-input type="text" placeholder="请填写真实手机号" v-model="form.phone" />
			</u-form-item>
			
			<u-form-item label="证件类型" prop="typeName" label-width="130">
				<u-input type="select" placeholder="请选择证件类型" :select-open="selectShow" v-model="form.typeName" @click="selectShow = true" />
			</u-form-item>
			
			<u-form-item label="证件号码" prop="identificationNumber" label-width="130">
				<u-input type="text" placeholder="请输入真实有效证件号码" v-model="form.identificationNumber" />
			</u-form-item>
		</u-form>
		
		<u-select mode="single-column" :list="selectList" v-model="selectShow" @confirm="selectConfirm"></u-select>
		
		<!-- <button class="g-btn-primary u-margin-top-40" @click="sure">确定</button> -->
		<view class="u-margin-top-40">
			<u-button type="primary" shape="circle" @click="sure">确定</u-button>
		</view>
		<!-- <button class="g-btn-primary" @click="submit">添加</button>
		<button class="g-btn-primary u-margin-top-40" @click="saveContact">保存到联系人</button> -->
	</view>
</template>

<script>
	// import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				pageType: '',
				detailId: '',
				array: [{name:'中国'},{name: '美国'}, {name:'巴西'}, {name:'日本'}],
				selectList: [
					{
						value: '1',
						label: '身份证'
					},
					{
						value: '2',
						label: '护照'
					},
					{
						value: '3',
						label: '港澳台通行证'
					}
				],
				cardItem: {
					value: '1',
					label: '身份证'
				},
				selectShow: false,
				index: 0,
				form: {
					name: '',
					phone: '',
					identificationNumber: '',
					typeName: '身份证'
				},
				formData: {
					name: 'LiMin',
					email: '13563256321',
					identificationNumber: ''
				},
				rules: {
					name: [
						{
							required: true,
							message: '请填写真实姓名',
							trigger: 'blur' ,
						},
						{
							min: 3,
							max: 5,
							message: '姓名长度在3到5个字符',
							trigger: ['change','blur'],
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.chinese(value);
							},
							message: '姓名必须为中文',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						},
						// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
						// {
						// 	trigger: ['blur'],
						// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
						// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
						// 	asyncValidator: (rule, value, callback) => {
						// 		this.$u.post('/ebapi/public_api/index').then(res => {
						// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
						// 			if(res.error) {
						// 				callback(new Error('姓名重复'));
						// 			} else {
						// 				// 如果没有错误，也要执行callback()回调
						// 				callback();
						// 			}
						// 		})
						// 	},
						// }
					],
					phone: [
						{
							required: true,
							message: '请填写真实手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					],
					goodsType: [
						{
							required: true,
							message: '请选择证件类型',
							trigger: ['change','blur'],
						}
					],
					identificationNumber: [
						{
							required: true,
							message: '请输入真实有效证件号码',
							trigger: ['change','blur'],
						},
						{
							validator: (rule, value, callback) => {
								console.log(11, value)
								// console.log(rule)
								// console.log(222, this.form.goodsType)
								// return this.$u.test.idCard(value);
								if(this.cardItem.value == '1') {
									return this.$u.test.idCard(value);
								} else {
									let re1 = /^[a-zA-Z]{5,17}$/
									let re2 = /^[a-zA-Z0-9]{5,17}$/
									return re1.test(value) || re2.test(value)
								}
							},
							message: '证件格式错误',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change','blur'],
						}
					]
				},
				rules1: {
					// 对name字段进行必填验证
					name: {
						rules: [{
								required: true,
								errorMessage: '请输入姓名',
							},
							{
								minLength: 3,
								maxLength: 5,
								errorMessage: '姓名长度在 {minLength} 到 {maxLength} 个字符',
							}
						]
					},
					// 对email字段进行必填验证
					email: {
						rules: [{
							// format: 'email',
							// pattern: /^1[3456789]\d{9}$/,
							// pattern: /^1(1|2|3|4|5|6|7|8|9)\d{9}$/,
							pattern: "^1[3456789]\\d{9}$",  //必须加引号的才生效注意带引号需要使用 \ 转义
							errorMessage: '手机号格式错误',
						}]
					},
					identificationNumber: {
						rules: [{
							required: true,
							errorMessage: '请选择兴趣',
						},{
							// 不生效 todo 
							validateFunction: function(rule, value, data, callback){
								console.log(11, value)
								if (value.length < 2) {
									callback('请至少勾选两个兴趣爱好')
								}
								return true
							}
						}]
					}
				}
			}
		},
		onLoad(event) {
			console.log(event)
			this.pageType = event.type
			if(event.data) {
				this.formData = JSON.parse(event.data)
			} else {
				this.formData = {}
			}
		},
		onReady() {
			// 使用validateFunction需要在onReady中设置规则
			// this.$refs.form.setRules(this.rules)
			
			this.$refs.uForm.setRules(this.rules);
		},
		methods: {
			// 选择商品类型回调
			selectConfirm(e) {
				console.log(e)
				// this.form.typeName = '';
				e.map((val, index) => {
					this.cardItem = val
					this.form.typeName = val.label
					// this.form.typeName += this.form.typeName == '' ? val.label : '-' + val.label;
				})
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为：' + e.detail.value)
				this.index = e.detail.value
			},
			// 确定
			sure() {
				console.log(this.cardItem)
				console.log(11, this.form)
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// if(!this.model.agreement) return this.$u.toast('请勾选协议');
						console.log('验证通过', this.form);
					} else {
						console.log('验证失败');
					}
				});
				// this.$refs.form.submit().then(res=>{
				// 	console.log('表单数据信息：', res);
				// }).catch(err =>{
				// 	console.log('表单错误信息：', err);
				// })
			},
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// if(!this.model.agreement) return this.$u.toast('请勾选协议');
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
				// this.$refs.form.submit().then(res=>{
				// 	console.log('表单数据信息：', res);
				// }).catch(err =>{
				// 	console.log('表单错误信息：', err);
				// })
			},
			saveContact() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						// if(!this.model.agreement) return this.$u.toast('请勾选协议');
						console.log('验证通过');
					} else {
						console.log('验证失败');
					}
				});
				// console.log('保存联系人')
				// this.$refs.form.submit().then(res=>{
				// 	console.log('表单数据信息：', res);
				// }).catch(err =>{
				// 	console.log('表单错误信息：', err);
				// })
			}
		}
	}
</script>

<style lang="scss">
.page-order-add {
	padding: 20rpx;
	background-color: #fff;
	.uni-input {
		height: 36px;
		line-height: 36px;
		.icon-more {
			float: right;
		}
	}
}
</style>