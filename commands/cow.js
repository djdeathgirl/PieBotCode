const Discord = require('discord.js');

exports.run = function(client, message) {
  var cow = ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Cow_female_black_white.jpg/220px-Cow_female_black_white.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/CH_cow_2_cropped.jpg/1200px-CH_cow_2_cropped.jpg', 'https://media.mnn.com/assets/images/2017/01/cow-in-pasture.jpg.838x0_q80.jpg', 'https://media1.britannica.com/eb-media/55/174255-004-9A4971E9.jpg', 'https://cdn.modernfarmer.com/wp-content/uploads/2014/09/cowhero2.jpg', 'http://i3.mirror.co.uk/incoming/article9456387.ece/ALTERNATES/s615/Holstein-dairy-cow-at-Bega-NSW.jpg', 'https://puxccbo05z-flywheel.netdna-ssl.com/wp-content/uploads/2015/02/cows-1.jpg', 'https://cdn.lrb.co.uk/blog/wp-content/uploads/2017/03/jersey-cow.png', 'http://media.istockphoto.com/photos/black-and-white-cow-with-blue-sky-picture-id502874496', 'https://cdn.modernfarmer.com/wp-content/uploads/2014/09/innercowhero.jpg', 'https://ibeconomics.files.wordpress.com/2009/05/cow.jpg', 'http://weknowyourdreams.com/images/cow/cow-06.jpg', 'http://dreamatico.com/data_images/cow/cow-3.jpg', 'https://pbs.twimg.com/profile_images/791067045991358464/yy_F__YU.jpg', 'https://i.giphy.com/media/h55EUEsTG9224/giphy-downsized-large.gif', 'http://blog.oxforddictionaries.com/wp-content/uploads/cows-in-the-oed.jpg', 'https://previews.123rf.com/images/kadmy/kadmy1001/kadmy100100308/6250621-White-milch-cow-with-black-spots-grazing-on-green-grass-pasture-over-blue-sky-Stock-Photo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/0/05/Cow-bw.JPG', 'http://s.newsweek.com/sites/www.newsweek.com/files/styles/feature/public/2017/04/06/dairy-cow.jpg']
  const embed = new Discord.RichEmbed()
    .setColor(0xFFB200)
    .addField('Cow', `Moooo ${message.author.username}!`)
    .setImage(`${cow[~~(Math.random() * cow.length)]}`)
  message.channel.send({embed});
}
