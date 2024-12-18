#!/bin/bash

# 查找当前目录下的所有 index.html 文件（排除隐藏文件夹）
index_files=$(find . -type f -name "index.html" ! -path "*/.*")

# 遍历每个 index.html 文件
for index_file in $index_files; do
  echo "检查文件：$index_file"

  # 检查文件内容是否包含 "r.min.js"
  if grep -q "src=\"r.min.js\"" "$index_file"; then
    echo "找到 'r.min.js'，准备检查 r.js"

    # 获取 index.html 文件所在的目录
    dir=$(dirname "$index_file")
    rjs_file="$dir/r.js"
    rmin_file="$dir/r.min.js"

    # 检查 r.js 是否存在
    if [[ -f "$rjs_file" ]]; then
      echo "找到 r.js，正在执行压缩：jsmini $rjs_file $rmin_file"
      
      # 执行 jsmini 命令
      if ! jsmini "$rjs_file" "$rmin_file"; then
        echo "错误：执行 jsmini 命令失败！"
        exit 1  # 终止 commit
      fi

      # 将生成的 r.min.js 添加到 git 暂存区
      echo "将生成的 r.min.js 文件添加到 git 暂存区..."
      git add "$rmin_file"
    else
      echo "错误：在 $dir 目录下未找到 r.js 文件！"
      exit 1  # 终止 commit
    fi
  fi
done

# 如果没有遇到错误，返回 0，允许提交
exit 0