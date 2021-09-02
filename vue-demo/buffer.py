#!/usr/bin/env python3
# -*- coding: utf-8 -*-

# Copyright (C) 2018 Andy Stewart
#
# Author:     Andy Stewart <lazycat.manatee@gmail.com>
# Maintainer: Andy Stewart <lazycat.manatee@gmail.com>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.

import os
from PyQt5 import QtCore
from core.webengine import BrowserBuffer
from core.utils import eval_in_emacs, PostGui, get_emacs_vars, interactive, message_to_emacs, get_emacs_func_result

class AppBuffer(BrowserBuffer):
    def __init__(self, buffer_id, url, arguments):
        BrowserBuffer.__init__(self, buffer_id, url, arguments, False)

        self.load_index_html(__file__)
        self.vue_files = []    
        self.words = 'hello'

    @QtCore.pyqtSlot(str)
    def rename_words(self, cur_words):
        print(self.words)
        self.words = cur_words
        print(self.words)
        message_to_emacs("now num is '{}' ".format(self.words))
