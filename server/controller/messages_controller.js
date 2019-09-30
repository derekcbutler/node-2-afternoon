let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    // console.log(req.body);
    // const { text, time }=req.body;
    let newMessage = {
      text: req.body.text,
      time: req.body.time,
      id: id
    };
    messages.push(newMessage);
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateId = req.params.id;
    const messageIndex = messages.findIndex(e => e.id === +updateId);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    const deleteID = req.params.id;
    const messagesIndex = messages.findIndex(
      messages => messages.id === +deleteID
    );
    messages.splice(messagesIndex, 1);
    res.status(200).send(messages);
  }
};
