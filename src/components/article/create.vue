<template>
  <div class="page">
    <div class="page-header">
      <h1 class="page-title">Demo</h1>
      <el-breadcrumb>
        <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
        <el-breadcrumb-item>Demo</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="article-create">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="标题" prop="name">
          <el-input v-model="ruleForm.name" class="input300"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-select v-model="ruleForm.type" class="input300" placeholder="请选择">
            <el-option label="综合业务" value="shanghai"></el-option>
            <el-option label="工作进展" value="beijing"></el-option>
            <el-option label="社会参与" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="发布状态" prop="is_publish">
          <el-radio-group v-model="ruleForm.is_publish">
            <el-radio label="0">已发布</el-radio>
            <el-radio label="1">未发布</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="附件" prop="file">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList3">
            <el-button size="small" type="primary">点击上传</el-button>
            <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
          </el-upload>
        </el-form-item>
        <el-form-item label="正文内容" prop="is_publish">
          若未上传文件，可通过下方编辑器自行编辑文章内容
        </el-form-item>
        <el-form-item>
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
          </quill-editor>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */

import {quillEditor} from 'vue-quill-editor'

export default {
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: '',
        is_publish: '',
        desc: ''
      },
      content: null,
      editorOption: {},
      fileList3: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }],
      rules: {
        name: [
          {required: true, message: '请输入文章标题', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
        ],
        type: [
          {type: 'array', required: true, message: '请至少选择文章类型', trigger: 'change'}
        ],
        is_publish: [
          {required: true, message: '选择发布状态', trigger: 'change'}
        ],
        desc: [
          {required: true, message: '请填写活动形式', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    },
    onEditorBlur () { // 失去焦点事件
    },
    onEditorFocus () { // 获得焦点事件
    },
    onEditorChange () { // 内容改变事件
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../assets/less/common";

  .article-create {
    background: #ffffff;
    margin: 20px;
    padding: 20px;
    .demo-ruleForm {
      max-width: 980px;
    }
  }
</style>
