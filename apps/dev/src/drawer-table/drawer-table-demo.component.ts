/**
 * @license
 * Copyright 2021 Dynatrace LLC
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';

@Component({
  selector: 'drawer-table-demo',
  templateUrl: './drawer-table-demo.component.html',
})
export class DrawerTableDemo {
  dataSource = [
    { col1: 'test 1', col2: 'test 1', col3: 'test 1' },
    { col1: 'test 2', col2: 'test 2', col3: 'test 2' },
    { col1: 'test 3', col2: 'test 3', col3: 'test 3' },
    { col1: 'test 4', col2: 'test 4', col3: 'test 4' },
  ];
}
