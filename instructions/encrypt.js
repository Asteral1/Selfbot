module.exports = {
  name: 'encryptmessage',
  description: 'Encrypt a message using a heavily glitched-out cipher',
  execute(message, args) {
    if (args.length === 0) {
      return message.channel.send('❗ Please provide a message to encrypt.');
    }

    const text = args.join(' ');
    const encryptedText = glitchEncrypt(text); // Glitched encryption function

    message.channel.send(`🛡️ Encrypted Message: \`${encryptedText}\``);
  }
};

// Function to perform "super glitched" encryption with lots of random special characters
function glitchEncrypt(str) {
  const glitchCharacters = [
    '҉', '∂', 'Ҝ', 'ε', 'ł', 'σ', '∑', 'ř', '∫', '¥', '∇', 'λ', '∂', 'Σ', '∆', 'ψ', 'ω', '†', '∏', 'Ж', 'Ѿ', 'Ф', 'Ш', 'Ђ', 'ξ', '∞', 'Ω', '∮',
    'Ҕ', 'Ѽ', '†', '★', '➳', '♡', '⊗', '☯', '⚔', 'ᚖ', '⧫', '⊘', '◯', '♞', '☠', '⧲', '★', '𝔇', '𝔘', 'ℵ', '☾', '⟟', '≻', '≼', '⧏', '⦿', '➼', '☀', '⚡', '⟁', '⦵'
  ]; // Expanded glitchy characters

  return str.split('').map(char => {
    if (char.match(/[a-z]/i)) {
      // Randomly replace characters with "glitched" symbols
      const glitch = Math.random() < 0.6 ? glitchCharacters[Math.floor(Math.random() * glitchCharacters.length)] : char;
      return glitch;
    }
    return char; // Non-alphabet characters remain unchanged
  }).join('');
}
