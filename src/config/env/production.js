'use strict';

//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

/**
 * <p>
 *     Production env
 *
 * @author martijn <martijn@spent-time.com>
 */
module.exports = {
    host: 'localhost',
    port: 2355,
    db: 'filtr',
    tables: {
        session: 'id',
        users: 'id'
    },
    secret: process.env.COOKIE_SECRET,
    facebook: {
        clientID: process.env.FACEBOOK_CLIENTID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: 'https://filtr.news/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'email']
    },
    google: {
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'https://filtr.news/auth/google/callback'
    }
};
