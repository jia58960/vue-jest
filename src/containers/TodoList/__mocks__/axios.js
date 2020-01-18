const undoList = {
  code: 0,
  data: [{
    status: 'div',
    value: '学习vue'
  }, {
    status: 'div',
    value: '学习vuex'
  }, {
    status: 'div',
    value: '学习Jest'
  }]
}

export default {
  get (url) {
    if (url === '/undolist.json') {
      return new Promise((resolve, reject) => {
        resolve(undoList)
      })
    }
  }
}
