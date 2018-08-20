export default {
  tableFields: [
    {
      name: '__component',
      title: '',
      dataClass: 'text-center'
    },
    {
      name: 'name',
      title: '판매사원',

    },
    {
      name: 'address.zipcode',
      title: '제품 번호',
      sortField: 'name'
    }
  ],
  sortFunctions: {
    'name': function (item1, item2) {
      return item1 >= item2 ? 1 : -1
    }
  }
}
