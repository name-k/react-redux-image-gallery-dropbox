module.exports = ['All', 'External', 'On deck', 'Cabins', 'Salon', 'Gallery', 'Rigging', 'Under Sails', 'Water Toys'].map((item, index) => (
    {
      name   : item,
      id     : index,
      active : index === 0 ? true : false
    }
  ));