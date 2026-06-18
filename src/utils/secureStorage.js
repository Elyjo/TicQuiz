const SECRET = "tic-quiz-v1";

/**
 * Hash simple (non cryptographique mais suffisant pour MVP)
 */
function simpleHash(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }

  return hash.toString();
}

/**
 * Encode data
 */
export function encodeData(data) {
  const json = JSON.stringify(data);
  const payload = btoa(json);
  const signature = simpleHash(json + SECRET);

  return btoa(
    JSON.stringify({
      payload,
      signature,
    }),
  );
}

/**
 * Decode + verify
 */
export function decodeData(encoded) {
  try {
    const parsed = JSON.parse(atob(encoded));

    const json = atob(parsed.payload);
    const expectedSignature = simpleHash(json + SECRET);

    if (expectedSignature !== parsed.signature) {
      console.warn("Data tampered!");
      return null;
    }

    return JSON.parse(json);
  } catch (e) {
    return null;
  }
}
