export default function() {
  this.get('/folders', function() {
    return {
      data: [{
        type: 'folders',
        id: 1,
        attributes: {
          title: 'Первая папка',
          owner: 'Veruca Salt',
          child: [
            {title: '123', 'owner': 123}
          ]         
        }
      }, {
        type: 'folders',
        id: 2,
        attributes: {
          title: 'Напши проекты',
          owner: 'Mike Teavee',
        }
      }, {
        type: 'folders',
        id: 3,
        attributes: {
          title: 'Хлам',
          owner: 'Violet Beauregarde'          
        }
      }]
    }
  });
}