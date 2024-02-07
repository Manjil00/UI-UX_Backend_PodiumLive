const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  // Check if the user is authenticated
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'yourSecretKey');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
};
module.exports =  {authenticate};

// // Get all messages
// router.get('/messages', authenticate, async (req, res, next) => {
//   try {
//     const messages = await Message.find();
//     res.json(messages);
//   } catch (err) {
//     next(err);
//   }
// });

// // Get message by ID
// router.get('/messages/:id', authenticate, async (req, res, next) => {
//   try {
//     const messageId = req.params.id;
//     const message = await Message.findById(messageId);
//     if (!message) {
//       return res.status(404).json({ error: 'Message not found' });
//     }
//     res.json(message);
//   } catch (err) {
//     next(err);
//   }
// });

// // Create a new message
// router.post('/messages', authenticate, async (req, res, next) => {
//   try {
//     const { roomId, userId, content } = req.body;
//     const message = new Message({ roomId, userId, content });
//     await message.save();
//     res.status(201).json(message);
//   } catch (err) {
//     next(err);
//   }
// });

// // Update message by ID
// router.put('/messages/:id', authenticate, async (req, res, next) => {
//   try {
//     const messageId = req.params.id;
//     const { roomId, userId, content } = req.body;
//     const message = await Message.findByIdAndUpdate(
//       messageId,
//       { roomId, userId, content },
//       { new: true }
//     );
//     if (!message) {
//       return res.status(404).json({ error: 'Message not found' });
//     }
//     res.json(message);
//   } catch (err) {
//     next(err);
//   }
// });

// // Delete message by ID
// router.delete('/messages/:id', authenticate, async (req, res, next) => {
//   try {
//     const messageId = req.params.id;
//     const message = await Message.findByIdAndDelete(messageId);
//     if (!message) {
//       return res.status(404).json({ error: 'Message not found' });
//     }
//     res.json({ message: 'Message deleted successfully' });
//   } catch (err) {
//     next(err);
//   }
// });





