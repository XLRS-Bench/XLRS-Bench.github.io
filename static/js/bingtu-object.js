var dom = document.getElementById('container-object');
var myChart = echarts.init(dom, null, {
  renderer: 'svg',
  useDirtyRect: false
});
var app = {};

var option;

var data = [
  {
    name: 'Perception',
    itemStyle: { color: '#b14d57' },
    children: [
      {
        name: 'Counting',
        itemStyle: { color: '#c78936' },
        children: [
          { name: 'OC', value: 1, itemStyle: { color: '#e5762e' } },
          { name: 'RC', value: 1, itemStyle: { color: '#dd4c51' } }
        ]
      },
      {
        name: 'Scene Classification',
        itemStyle: { color: '#8c292c' },
        children: [
          { name: 'OLUC', value: 1, itemStyle: { color: '#a16c5a' } },
          { name: 'RLUC', value: 1, itemStyle: { color: '#E5CCCC' } }
        ]
      },
      {
        name: 'Object Spatial Relationship',
        itemStyle: { color: '#E0C0C0' },
        children: [
          { name: 'OSR', value: 1, itemStyle: { color: '#dd4c51' } }
        ]
      },
      {
        name: 'Object Properties',
        itemStyle: { color: '#e65832' },
        children: [
          { name: 'OCC', value: 1, itemStyle: { color: '#d45a59' } },
          { name: 'OCL', value: 1, itemStyle: { color: '#ae341f' } },
          { name: 'OMS', value: 1, itemStyle: { color: '#E5E5CC' } }
        ]
      },
      {
        name: 'Image Captioning',
        itemStyle: { color: '#E0E0C0' },
        children: [
          { name: 'Detailed', value: 1, itemStyle: { color: '#CCCC99' } }
        ]
      },
      {
        name: 'Visual Grounding',
        itemStyle: { color: '#C0C080' },
        children: [
          { name: 'Fine-grained', value: 1, itemStyle: { color: '#B2B266' } }
        ]
      }
    ]
  },
  {
    name: 'Reasoning',
    itemStyle: { color: '#a87b64' },
    children: [
      {
        name: 'Visual Grounding',
        itemStyle: { color: '#c78869' },
        children: [
          { name: 'Condition-based', value: 1, itemStyle: { color: '#d4ad12' } }
        ]
      },
      {
        name: 'Route Planning',
        itemStyle: { color: '#9d5433' },
        children: [
          { name: 'RP', value: 1, itemStyle: { color: '#c89f83' } }
        ]
      },
      {
        name: 'Anomaly Reasoning',
        itemStyle: { color: '#bb764c' },
        children: [
          { name: 'AD', value: 1, itemStyle: { color: '#692a19' } }
        ]
      },
      {
        name: 'Complex Reasoning',
        itemStyle: { color: '#470604' },
        children: [
          { name: 'ECR', value: 1, itemStyle: { color: '#CCCCE5' } },
          { name: 'CCR', value: 1, itemStyle: { color: '#E0E0FF' } }
        ]
      },
      {
        name: 'Spatiotemporal Reasoning',
        itemStyle: { color: '#CCCCFF' },
        children: [
          { name: 'RCCD', value: 1, itemStyle: { color: '#8080FF' } }
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
        r: '25%',
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
        r0: '25%',
        r: '70%',
        label: {
          align: 'center',
          fontSize: 11,
          fontWeight: "bold"
        },
        itemStyle: {
          borderWidth: 3,
          borderRadius: 20,
          shadowColor: 'grey'
        }
      },
      {
        r0: '70%',
        r: '100%',
        label: {
          position: 'inside',
          padding: 0,
          fontSize: 10,
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
