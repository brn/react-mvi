/**
 * The MIT License (MIT)
 * Copyright (c) Taketoshi Aono
 *  
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *  
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 *  ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * @fileoverview 
 * @author Taketoshi Aono
 */

import * as fs from 'fs';

export const pkg = getPkg();


export function getPkg() {
  try {
    return JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  } catch (e) {
    return {};
  }
}


export function checkPkg(pkg, allowMigrated = false) {
  if (pkg.name && !pkg.rmvi) {
    const m = [
      `\n${pkg.name} is not controlled by rmvi.`,
      'To continue command, call "rmvi migrate"\n'
    ];

    console.log(m.join('\n'));
    process.exit(1);
  } else if (!allowMigrated && pkg.rmvi && pkg.rmvi.migrated) {
    const m = [
      `\n${pkg.name} is migrated project.`,
      'Migrated project only allow commands "install" and "update".\n'
    ];

    console.log(m.join('\n'));
    process.exit(1);
  }
}
