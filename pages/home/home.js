Page({
  data: {
    lists: [
      { id: 1, text: "1111111111111111111111", selected: true },
      { id: 2, text: "222222222222222", selected: true },
      { id: 3, text: "33333333", selected: false },
      { id: 4, text: "4444", selected: false },
    ],
    visibleConfirm: false
  },
  confirm(event){
    console.log(1)
  },
  confirmCreate(event) {
    let content = event.detail
    if (content) {
      http.post('/todos', {
        completed: false, description: content
      }).then(res => {
        let todo = [res.data.resource]
        this.data.lists = todo.concat(this.data.lists)
        this.setData({ lists: this.data.lists })
        this.hideConfirm()
      })
    }
  }, 
  hideConfirm(){
    this.setData({ visibleConfirm: false })
  },
  showConfirm(){
    this.setData({ visibleConfirm: true})
  }
})