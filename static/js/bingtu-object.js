var dom = document.getElementById('container-object');
var myChart = echarts.init(dom, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option;

// var data = [
//   {
//     name: 'Perception',
//     itemStyle: { color: '#b14d57' },
//     children: [
//       {
//         name: 'Counting',
//         itemStyle: { color: '#c78936' },
//         children: [
//           { name: 'OC', value: 1, itemStyle: { color: '#e5762e' } },
//           { name: 'RC', value: 1, itemStyle: { color: '#dd4c51' } }
//         ]
//       },
//       {
//         name: 'Scene Classification',
//         itemStyle: { color: '#8c292c' },
//         children: [
//           { name: 'OLUC', value: 1, itemStyle: { color: '#a16c5a' } },
//           { name: 'RLUC', value: 1, itemStyle: { color: '#E5CCCC' } }
//         ]
//       },
//       {
//         name: 'Object Spatial Relationship',
//         itemStyle: { color: '#E0C0C0' },
//         children: [
//           { name: 'OSR', value: 1, itemStyle: { color: '#dd4c51' } }
//         ]
//       },
//       {
//         name: 'Object Properties',
//         itemStyle: { color: '#e65832' },
//         children: [
//           { name: 'OCC', value: 1, itemStyle: { color: '#d45a59' } },
//           { name: 'OCL', value: 1, itemStyle: { color: '#ae341f' } },
//           { name: 'OMS', value: 1, itemStyle: { color: '#E5E5CC' } }
//         ]
//       },
//       {
//         name: 'Image Captioning',
//         itemStyle: { color: '#E0E0C0' },
//         children: [
//           { name: 'Detailed', value: 1, itemStyle: { color: '#CCCC99' } }
//         ]
//       },
//       {
//         name: 'Visual Grounding',
//         itemStyle: { color: '#C0C080' },
//         children: [
//           { name: 'Fine-grained', value: 1, itemStyle: { color: '#B2B266' } }
//         ]
//       }
//     ]
//   },
//   {
//     name: 'Reasoning',
//     itemStyle: { color: '#a87b64' },
//     children: [
//       {
//         name: 'Visual Grounding',
//         itemStyle: { color: '#c78869' },
//         children: [
//           { name: 'Condition-based', value: 1, itemStyle: { color: '#d4ad12' } }
//         ]
//       },
//       {
//         name: 'Route Planning',
//         itemStyle: { color: '#9d5433' },
//         children: [
//           { name: 'RP', value: 1, itemStyle: { color: '#c89f83' } }
//         ]
//       },
//       {
//         name: 'Anomaly Reasoning',
//         itemStyle: { color: '#bb764c' },
//         children: [
//           { name: 'AD', value: 1, itemStyle: { color: '#692a19' } }
//         ]
//       },
//       {
//         name: 'Complex Reasoning',
//         itemStyle: { color: '#470604' },
//         children: [
//           { name: 'ECR', value: 1, itemStyle: { color: '#CCCCE5' } },
//           { name: 'CCR', value: 1, itemStyle: { color: '#E0E0FF' } }
//         ]
//       },
//       {
//         name: 'Spatiotemporal Reasoning',
//         itemStyle: { color: '#CCCCFF' },
//         children: [
//           { name: 'RCCD', value: 1, itemStyle: { color: '#8080FF' } }
//         ]
//       }
//     ]
//   }
// ];
var data = [
  {
    name: 'Perception',
    itemStyle: { color: '#4DB6AC' }, // 顶层：柔和青绿色
    children: [
      {
        name: 'Counting',
        itemStyle: { color: '#81D4FA' }, // L2 浅蓝色
        children: [
          { name: 'Overall Counting', value: 1, itemStyle: { color: '#4FC3F7' } }, // L3 渐变更明显
          { name: 'Regional Counting', value: 1, itemStyle: { color: '#29B6F6' } }
        ]
      },
      {
        name: 'Scene Classification',
        itemStyle: { color: '#CE93D8' }, // L2 薰衣草紫
        children: [
          { name: 'Overall Land Use Classification', value: 1, itemStyle: { color: '#BA68C8' } },
          { name: 'Regional Land Use Classification', value: 1, itemStyle: { color: '#AB47BC' } }
        ]
      },
      {
        name: 'Object Spatial Relationship',
        itemStyle: { color: '#A5D6A7' }, // L2 浅绿色
        children: [
          { name: 'Oobject Spatial Relationship', value: 1, itemStyle: { color: '#66BB6A' } }
        ]
      },
      {
        name: 'Object Properties',
        itemStyle: { color: '#FFF59D' }, // L2 暖黄色
        children: [
          { name: 'Oobject Classification', value: 1, itemStyle: { color: '#FFEE58' } },
          { name: 'Oobject Color', value: 1, itemStyle: { color: '#FFEB3B' } },
          { name: 'Oobject Motion State', value: 1, itemStyle: { color: '#FDD835' } }
        ]
      },
      {
        name: 'Image Captioning',
        itemStyle: { color: '#FFAB91' }, // L2 珊瑚色
        children: [
          { name: 'Detailed Image Captioning', value: 1, itemStyle: { color: '#FF8A65' } }
        ]
      },
      {
        name: 'Visual Grounding',
        itemStyle: { color: '#B0BEC5' }, // L2 Visual Grounding 统一颜色
        children: [
          { name: 'Fine-grained Visual Grounding', value: 1, itemStyle: { color: '#8AA0A8' } } // L3 与 Condition-based 相近
        ]
      }
    ]
  },
  {
    name: 'Reasoning',
    itemStyle: { color: '#FF8A65' }, // 顶层：温暖橙色
    children: [
      {
        name: 'Visual Grounding',
        itemStyle: { color: '#B0BEC5' }, // L2 Visual Grounding 统一颜色
        children: [
          { name: 'Condition-based Visual Grounding', value: 1, itemStyle: { color: '#90A4AE' } } // L3 与 Fine-grained 相近
        ]
      },
      {
        name: 'Route Planning',
        itemStyle: { color: '#80CBC4' }, // L2 浅青色
        children: [
          { name: 'Route Planning', value: 1, itemStyle: { color: '#4DB6AC' } }
        ]
      },
      {
        name: 'Anomaly Reasoning',
        itemStyle: { color: '#EF9A9A' }, // L2 浅红色
        children: [
          { name: 'Anomaly Detection and Interpretation', value: 1, itemStyle: { color: '#E57373' } }
        ]
      },
      {
        name: 'Complex Reasoning',
        itemStyle: { color: '#CE93D8' }, // L2 浅紫色
        children: [
          { name: 'Environmental Condition Reasoning', value: 1, itemStyle: { color: '#AB47BC' } },
          { name: 'Counting with Complex Reasoning', value: 1, itemStyle: { color: '#9C27B0' } }
        ]
      },
      {
        name: 'Spatiotemporal Reasoning',
        itemStyle: { color: '#90CAF9' }, // L2 浅蓝色
        children: [
          { name: 'Regional Counting with Change Detection', value: 1, itemStyle: { color: '#64B5F6' } }
        ]
      }
    ]
  }
];


option = {
  textStyle: {
    fontStyle: 'normal',
    fontFamily: "serif",
    fontSize: 17,
    width: 5,
    overflow: 'breakAll'
  },
  series: {
    type: 'sunburst',
    data: data,
    center: ['50%', '50%'],
    radius: ['5%', '100%'],
    sort: undefined,
    emphasis: {
      focus: 'ancestor'
    },
    label: {
      textStyle: {
          // color: "#ffffff",
          // fontWeight: 'bolder',
          fontFamily: 'serif'
      },
      formatter: function(params) {
        var text = params.name;
        var maxChars = 20; // 每行最多字符数
        var result = '';
        while (text.length > maxChars) {
          // 尝试在前maxChars内找到最后一个空格
          var pos = text.lastIndexOf(' ', maxChars);
          if (pos === -1) {
            // 没有空格，直接在maxChars处断开，并添加连字符
            result += text.slice(0, maxChars) + '-\n';
            text = text.slice(maxChars);
          } else {
            // 如果空格位置在maxChars前，则在空格处断行，不需要连字符
            result += text.slice(0, pos) + '\n';
            text = text.slice(pos + 1);
          }
        }
        result += text;
        return result;
      },
      },
    levels: [
      {},
      {
        r0: '5%',
        r: '20%',
        itemStyle: {
          borderWidth: 2,
          borderRadius: 10,
          shadowColor: 'grey',
          shadowBlur: 20
        },
        label: {
          align: 'center',
          fontSize: 13,
          fontWeight: "bold",
          rotate: 'tangential'
        }
      },
      {
        r0: '20%',
        r: '60%',
        label: {
          align: 'center',
          fontSize: 12,
          fontWeight: "bold"
        },
        itemStyle: {
          borderWidth: 3,
          borderRadius: 20,
          shadowColor: 'grey'
        }
      },
      {
        r0: '60%',
        r: '100%',
        label: {
          position: 'inside',
          padding: 0,
          fontSize: 11,
          silent: true,
          fontWeight: "bold"
        },
        itemStyle: {
          borderWidth: 2,
          borderRadius: 10,
          shadowColor: 'grey'
        }
      }
    ]
  }
};

if (option && typeof option === 'object') {
  myChart.setOption(option);
}

window.addEventListener('resize', myChart.resize);
