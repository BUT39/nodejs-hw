import { Session } from '../models/session.js';
import { FIFTEEN_MINUTES, ONE_DAY } from '../constants/time.js';
import { randomUUID } from 'node:crypto';

export const createSession = (userId) =>
  Session.create({
    userId,
    refreshToken: randomUUID(),
    accessToken: randomUUID(),
    accessTokenValidUntil: new Date(Date.now() + FIFTEEN_MINUTES),
    refreshTokenValidUntil: new Date(Date.now() + ONE_DAY),
  });

export const setSessionCookies = (res, session) => {
  res.cookie('sessionId', session._id, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: ONE_DAY,
    secure: true,
  });

  res.cookie('accessToken', session.accessToken, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: FIFTEEN_MINUTES,
    secure: true,
  });

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    sameSite: 'none',
    maxAge: ONE_DAY,
    secure: true,
  });
};
