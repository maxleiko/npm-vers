/*
 * npm-versions
 * https://github.com/maxleiko/npm-versions
 *
 * Copyright (c) 2014 Maxime Tricoire
 * Licensed under the MIT license.
 */

'use strict';

var npm = require('npm');
var SemVer = require('semver').SemVer;

module.exports = function (name, callback) {
    npm.load({loglevel: 'silent'}, function (err) {
        if (err) {
            return callback(err);
        }

        npm.commands.view([name, 'name', 'version', 'versions'], true, function (err, view) {
            if (err) {
                return callback(err);
            }

            view = view[Object.keys(view)[0]];

            // convert versions to SemVer versions
            var semvers = view.versions.map(function (vers) {
                return new SemVer(vers);
            });

            var result = {
                current: new SemVer(view.version),
                versions: semvers,
                latestRelease: null,
                latestPreRelease: null
            };

            for (var i=result.versions.length-1; i >= 0; i--) {
                if (result.versions[i].prerelease.length > 0 || result.versions[i].build.length > 0) {
                    // this version is a prerelease
                    if (!result.latestPreRelease) {
                        result.latestPreRelease = result.versions[i];
                    }
                } else {
                    // this version is a clean release
                    if (!result.latestRelease) {
                        result.latestRelease = result.versions[i];
                    }
                }

                if (result.latestRelease && result.latestPreRelease) {
                    break;
                }
            }

            callback(null, result);
        });
    });
};
