const productInfo = require('./productInfo');
 
function getBotResponse(message) {
  const lowerCaseMessage = message.toLowerCase();
  console.log('message inside getBotResponse', message);
 
  if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hy') || lowerCaseMessage.includes('hi')) {
    return "Hello! How can I assist you today?";
  } else if (lowerCaseMessage.includes('bye') || lowerCaseMessage.includes('goodbye')) {
    return "Thank you for chatting. Have a great day!";
  } else if (lowerCaseMessage.includes('product') || lowerCaseMessage.includes('info')) {
    return "What product would you like information about?";
  } else if (lowerCaseMessage.includes('shipping')) {
    return "We offer free shipping on orders over $50. Standard shipping usually takes 3-5 business days.";
  } else if (lowerCaseMessage.includes('return policy')) {
    return "We have a 30-day return policy for most items. Please check our Returns page for more details.";
  } else {
    const matchingProducts = [];
 
    // Exact match
    productInfo.forEach(product => {
      if (lowerCaseMessage.includes(product.name.toLowerCase())) {
        matchingProducts.push(`${product.name}: ${product.description}. Price: $${product.price}`);
      }
    });
 
    // Fuzzy match (product name contains any word from the message)
    productInfo.forEach(product => {
      const productWords = product.name.toLowerCase().split(' ');
      if (productWords.some(word => lowerCaseMessage.includes(word))) {
        // Check if product already exists in matchingProducts to avoid duplicates
        if (!matchingProducts.some(match => match.includes(product.name))) {
          matchingProducts.push(`${product.name}: ${product.description}. Price: $${product.price}`);
        }
      }
    });
 
    // Description match
    productInfo.forEach(product => {
      if (product.description.toLowerCase().includes(lowerCaseMessage)) {
        // Check if product already exists in matchingProducts to avoid duplicates
        if (!matchingProducts.some(match => match.includes(product.name))) {
          matchingProducts.push(`${product.name}: ${product.description}. Price: $${product.price}`);
        }
      }
    });
 
    if (matchingProducts.length > 0) {
      return matchingProducts.join('\n\n'); // Separate matches by two line breaks
    }
 
    return "I'm sorry, I didn't understand that. Can you please rephrase or ask another question?";
  }
}
 
module.exports = { getBotResponse };
