window.GAME = {
"stage": {
"width": 620,
"height": 900
},
"projectName": "躲方格2024",
"scenes": [
{
"id": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
"name": "进入界面",
"styleId": "ae8bcd36-25d3-4ea4-b907-38d4ccf4621b",
"groupOrder": [
"9c0b679f-8e1d-4184-9fa1-d64aa73f691e",
"604ec971-26ac-4f3c-8515-404609758d56"
],
"scripts": {
"blocks": {
"yfxlzpOfGoPiFQpe0qwH": {
"type": "start_on_click",
"id": "yfxlzpOfGoPiFQpe0qwH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
16.666664123535156,
-735.7779541015625
]
},
"5AcoBx42Qw4amsou50pl": {
"type": "show_hide_cloud_variable",
"id": "5AcoBx42Qw4amsou50pl",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"FUNC": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
31.111108779907227,
-384.6668395996094
],
"parent_id": "pfcwBhZVa2cmHphO4DS8"
},
"kcz8nHPSISGMRczpKOeF": {
"type": "show_hide_cloud_variable",
"id": "kcz8nHPSISGMRczpKOeF",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-35,
-334
],
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "5AcoBx42Qw4amsou50pl"
},
"EFDBSaYlFTh4YwLHIkRS": {
"type": "get_audios",
"id": "EFDBSaYlFTh4YwLHIkRS",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "a157fc74-91ac-4adb-9b5e-04b7fa08c919"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "pfcwBhZVa2cmHphO4DS8"
},
"pfcwBhZVa2cmHphO4DS8": {
"type": "play_audio_2",
"id": "pfcwBhZVa2cmHphO4DS8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"EFDBSaYlFTh4YwLHIkRS\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">a157fc74-91ac-4adb-9b5e-04b7fa08c919</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
23.333328247070312,
-710.2265625
],
"parent_id": "yfxlzpOfGoPiFQpe0qwH"
}
},
"connections": {
"yfxlzpOfGoPiFQpe0qwH": {
"pfcwBhZVa2cmHphO4DS8": {
"type": "next"
}
},
"5AcoBx42Qw4amsou50pl": {
"kcz8nHPSISGMRczpKOeF": {
"type": "next"
}
},
"kcz8nHPSISGMRczpKOeF": {},
"EFDBSaYlFTh4YwLHIkRS": {},
"pfcwBhZVa2cmHphO4DS8": {
"EFDBSaYlFTh4YwLHIkRS": {
"type": "input",
"input_type": "value",
"input_name": "audio"
},
"5AcoBx42Qw4amsou50pl": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"name": "游戏界面",
"styleId": "f7d11164-89e0-4dc3-9f9a-cf31462c9646",
"groupOrder": [
"493824e6-64c5-458d-ba18-fd063d8e9ff1",
"2d5e54e3-db28-41ff-8f67-6931bf21f1a3",
"48c2afc5-6eb3-42e3-a8b7-ff0ab2615b13",
"86712423-f579-4c4d-92dc-f77042b077e5",
"997fa9cc-d309-4a7f-8cc1-efd900d88e19",
"a5b7b668-fb3f-492b-b400-c791847defd5",
"2f0ebbee-b557-4fc2-8648-f980389eb0c9",
"6c49376b-5868-4bd9-8058-7407a5302047",
"2f3f3b91-7618-48bd-94d1-c6e74688f848",
"e703894a-ce34-43a3-814a-e343c75eafc3",
"c778370e-5a6a-43d3-9729-0216b78c08ee",
"e7de86b9-a9c6-4729-8e6f-997fd0009d1b",
"6f39e82d-20d3-45ee-a37d-91e7ccbf1057",
"2e05ba63-f275-4b61-b572-400fb87fe811",
"6d0bb532-37ba-4c2e-a01a-9abb6efa390d",
"8b9750b7-81ef-4358-9a88-046ab22ce9e2"
],
"scripts": {
"blocks": {
"8SQvLwRN5t6LldXHeKt7": {
"type": "on_running_group_activated",
"id": "8SQvLwRN5t6LldXHeKt7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
-0.611114501953125,
106.44424438476562
]
},
"aAAOt9XyAUvvdPYgRoPJ": {
"type": "show_hide_cloud_variable",
"id": "aAAOt9XyAUvvdPYgRoPJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
48.27777099609375,
337.997802734375
],
"parent_id": "8SQvLwRN5t6LldXHeKt7"
},
"DRougZATXDHjYRzHxfAa": {
"type": "show_hide_cloud_variable",
"id": "DRougZATXDHjYRzHxfAa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
96,
434
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "aAAOt9XyAUvvdPYgRoPJ"
}
},
"connections": {
"8SQvLwRN5t6LldXHeKt7": {
"aAAOt9XyAUvvdPYgRoPJ": {
"type": "next"
}
},
"aAAOt9XyAUvvdPYgRoPJ": {
"DRougZATXDHjYRzHxfAa": {
"type": "next"
}
},
"DRougZATXDHjYRzHxfAa": {}
},
"comments": {}
}
},
{
"id": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"name": "设置界面",
"styleId": "5f31b9f6-2011-4ddd-b6f1-d6ae0e32e924",
"groupOrder": [
"422737bc-ef4d-439a-af9e-fa8908b02dac",
"dbdf8c94-0b69-47c0-8ebf-d92492e9b2c6",
"2d08fda6-125f-4bad-b0ec-bb52cc13ecb6",
"05addb58-b36c-42a4-aca3-32249213ec62",
"e396fe72-6ce5-4e1a-b0bc-aad30f113a19",
"558ab298-6248-454d-abe1-b2da1f3c7d7b",
"087e8eb3-ae84-40c8-9a44-7fe6274feab8",
"01172c20-115b-4c34-bb27-4abc698dd874",
"b3aa0832-7a6a-4bff-ad44-8608c55acbe2",
"0c7253e4-81c7-45fb-b9c2-db2dd9297032",
"bc4035c0-c0eb-4378-bf71-e878346f2936",
"494fdc48-f349-4423-a6ee-6266f31174c0",
"9e0d49e4-bc56-461f-9622-38692933f34b",
"4bb40284-7398-42df-8379-679554f6e221",
"6e2f89c0-73f8-4f2c-8bd8-ae7075c02022",
"e9f20499-222d-454e-879c-e6a410bbad56",
"36dfa67c-8cb6-4026-bba0-eb43b52a3c67",
"f7edcc2c-c39d-446b-a0b7-2c83248e246f",
"838f0e11-ab97-477b-a1a0-72aab66aeb04"
],
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "1c99d815-11ea-400b-8e16-38abe13c15fc",
"name": "失败界面",
"styleId": "8ce09211-edda-4726-95fe-488811ff6a70",
"groupOrder": [
"3482e036-c30d-499a-90d3-328fb9076aa9",
"c5d88035-034f-48be-91e7-0ac5f99942e0"
],
"scripts": {
"blocks": {
"Hjx3LQrW083HgzKCn0C9": {
"type": "on_running_group_activated",
"id": "Hjx3LQrW083HgzKCn0C9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
116.66666412353516,
124.22203063964844
]
},
"RumxvnIBcjOZ42sAtRrY": {
"type": "get_whole_audios",
"id": "RumxvnIBcjOZ42sAtRrY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "glekoxG3kt4w0Nc6Xqpa"
},
"glekoxG3kt4w0Nc6Xqpa": {
"type": "stop_audio_2",
"id": "glekoxG3kt4w0Nc6Xqpa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
747.5511474609375
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"RumxvnIBcjOZ42sAtRrY\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Hjx3LQrW083HgzKCn0C9"
}
},
"connections": {
"Hjx3LQrW083HgzKCn0C9": {
"glekoxG3kt4w0Nc6Xqpa": {
"type": "next"
}
},
"RumxvnIBcjOZ42sAtRrY": {},
"glekoxG3kt4w0Nc6Xqpa": {
"RumxvnIBcjOZ42sAtRrY": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
}
},
"comments": {}
}
},
{
"id": "e0467d63-e28c-4ace-a939-fc75e93c5080",
"name": "商店界面",
"styleId": "13086f79-f302-4ad7-973a-b8b7e9a5e0e2",
"groupOrder": [
"3be208b9-6bca-44fc-89df-6069493a9d56",
"10fc8f0e-cfb6-45b3-8be5-ad2de2b37c7b"
],
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "a9583cd1-1617-4328-9306-3f5b8e108bcd",
"name": "快捷键说明",
"styleId": "127b5f62-33a6-4f16-a7c0-f4c7d92fbd45",
"groupOrder": [
"c43f1caf-46f4-491a-b644-82b21871dfe7",
"92c0fcf7-ec8a-45c3-ab5b-65be4999123f"
],
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
}
],
"groups": {
"604ec971-26ac-4f3c-8515-404609758d56": {
"id": "604ec971-26ac-4f3c-8515-404609758d56",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"b3fac116-4a7f-40e2-8900-642e8cadeca8"
],
"scene": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
"visible": true
},
"9c0b679f-8e1d-4184-9fa1-d64aa73f691e": {
"id": "9c0b679f-8e1d-4184-9fa1-d64aa73f691e",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"d21d18ae-48bb-451d-8405-3ad337a161b8"
],
"scene": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
"visible": true
},
"997fa9cc-d309-4a7f-8cc1-efd900d88e19": {
"id": "997fa9cc-d309-4a7f-8cc1-efd900d88e19",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"7596093f-7852-4fc2-9db7-7724e6cd6227"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"f7edcc2c-c39d-446b-a0b7-2c83248e246f": {
"id": "f7edcc2c-c39d-446b-a0b7-2c83248e246f",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"f506aa57-60de-4e48-a348-9bced54d7b3d"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"86712423-f579-4c4d-92dc-f77042b077e5": {
"id": "86712423-f579-4c4d-92dc-f77042b077e5",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"921e60b7-e6d0-45b4-b5d6-614b708bd057"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"48c2afc5-6eb3-42e3-a8b7-ff0ab2615b13": {
"id": "48c2afc5-6eb3-42e3-a8b7-ff0ab2615b13",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"835ca8ad-4613-433f-9692-99e474dc1ddd"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"c5d88035-034f-48be-91e7-0ac5f99942e0": {
"id": "c5d88035-034f-48be-91e7-0ac5f99942e0",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"4182bc93-019c-4b7f-8ee6-b8763eb8cebb"
],
"scene": "1c99d815-11ea-400b-8e16-38abe13c15fc",
"visible": true
},
"3482e036-c30d-499a-90d3-328fb9076aa9": {
"id": "3482e036-c30d-499a-90d3-328fb9076aa9",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"4f8af328-0e36-4883-a935-ebac6c6af761"
],
"scene": "1c99d815-11ea-400b-8e16-38abe13c15fc",
"visible": true
},
"4bb40284-7398-42df-8379-679554f6e221": {
"id": "4bb40284-7398-42df-8379-679554f6e221",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"dd85756a-94f4-4fd2-988f-0555ddad5073"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"9e0d49e4-bc56-461f-9622-38692933f34b": {
"id": "9e0d49e4-bc56-461f-9622-38692933f34b",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"52686f48-3e46-42f0-b9d4-c8937f9ad105"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"494fdc48-f349-4423-a6ee-6266f31174c0": {
"id": "494fdc48-f349-4423-a6ee-6266f31174c0",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"9f8b6eed-b962-4261-aef8-706546b4a720"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"bc4035c0-c0eb-4378-bf71-e878346f2936": {
"id": "bc4035c0-c0eb-4378-bf71-e878346f2936",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"bed47ce1-8669-4343-a211-a86fd62eaf84"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"0c7253e4-81c7-45fb-b9c2-db2dd9297032": {
"id": "0c7253e4-81c7-45fb-b9c2-db2dd9297032",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"96c2e193-db55-4f5c-b7e4-31ae77c4077c"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"b3aa0832-7a6a-4bff-ad44-8608c55acbe2": {
"id": "b3aa0832-7a6a-4bff-ad44-8608c55acbe2",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"dd48bac3-defe-49e3-bd64-4b7c01ab7ac3"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"6f39e82d-20d3-45ee-a37d-91e7ccbf1057": {
"id": "6f39e82d-20d3-45ee-a37d-91e7ccbf1057",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"9f3295bc-f957-4060-82a3-8bc4761b05b8"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"10fc8f0e-cfb6-45b3-8be5-ad2de2b37c7b": {
"id": "10fc8f0e-cfb6-45b3-8be5-ad2de2b37c7b",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"43b3564d-b78e-402d-916b-949ff2658e90"
],
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080",
"visible": true
},
"2e05ba63-f275-4b61-b572-400fb87fe811": {
"id": "2e05ba63-f275-4b61-b572-400fb87fe811",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"40e752ae-2d84-47ec-baa2-e0dffaf44ec9"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"3be208b9-6bca-44fc-89df-6069493a9d56": {
"id": "3be208b9-6bca-44fc-89df-6069493a9d56",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"1107e260-8398-4af2-9dbf-bef371140ab5"
],
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080",
"visible": true
},
"8b9750b7-81ef-4358-9a88-046ab22ce9e2": {
"id": "8b9750b7-81ef-4358-9a88-046ab22ce9e2",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"bd37bfc9-c9ad-4e60-9ff1-489304f3d3d5"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"6e2f89c0-73f8-4f2c-8bd8-ae7075c02022": {
"id": "6e2f89c0-73f8-4f2c-8bd8-ae7075c02022",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"60081dcd-58c1-467a-9d2c-5f877a3744bb"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"01172c20-115b-4c34-bb27-4abc698dd874": {
"id": "01172c20-115b-4c34-bb27-4abc698dd874",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"4930be4f-31c6-46fa-af90-a96a505137dd"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"838f0e11-ab97-477b-a1a0-72aab66aeb04": {
"id": "838f0e11-ab97-477b-a1a0-72aab66aeb04",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"f4e4b9bd-36d1-41de-8fb1-a933a43359cb"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"e9f20499-222d-454e-879c-e6a410bbad56": {
"id": "e9f20499-222d-454e-879c-e6a410bbad56",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"877c8850-5ab5-4c01-9177-aa2ee48a382a"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"087e8eb3-ae84-40c8-9a44-7fe6274feab8": {
"id": "087e8eb3-ae84-40c8-9a44-7fe6274feab8",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"f362b41d-b872-4061-af6e-0564681cc034"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"558ab298-6248-454d-abe1-b2da1f3c7d7b": {
"id": "558ab298-6248-454d-abe1-b2da1f3c7d7b",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"236715b3-affd-4316-b521-24d35b7c6597"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"05addb58-b36c-42a4-aca3-32249213ec62": {
"id": "05addb58-b36c-42a4-aca3-32249213ec62",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"1eeeade0-eb83-445b-ac22-7630d267e4e1"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"e396fe72-6ce5-4e1a-b0bc-aad30f113a19": {
"id": "e396fe72-6ce5-4e1a-b0bc-aad30f113a19",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"021e7986-7aa2-4d91-9b7a-d3bb6580abf4"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"6d0bb532-37ba-4c2e-a01a-9abb6efa390d": {
"id": "6d0bb532-37ba-4c2e-a01a-9abb6efa390d",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"d8addd5a-b327-479f-bd63-636428e27e94"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"e7de86b9-a9c6-4729-8e6f-997fd0009d1b": {
"id": "e7de86b9-a9c6-4729-8e6f-997fd0009d1b",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"e500d891-939e-493d-bca2-9af185e8e093"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"36dfa67c-8cb6-4026-bba0-eb43b52a3c67": {
"id": "36dfa67c-8cb6-4026-bba0-eb43b52a3c67",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"ca18b6e2-bc19-4884-b6c7-2274abca3e83"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"2d08fda6-125f-4bad-b0ec-bb52cc13ecb6": {
"id": "2d08fda6-125f-4bad-b0ec-bb52cc13ecb6",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"c213791c-a313-469c-b3f4-23b52108e930"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"dbdf8c94-0b69-47c0-8ebf-d92492e9b2c6": {
"id": "dbdf8c94-0b69-47c0-8ebf-d92492e9b2c6",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"743d3aac-5c30-4d54-9596-88ff51243a74"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"422737bc-ef4d-439a-af9e-fa8908b02dac": {
"id": "422737bc-ef4d-439a-af9e-fa8908b02dac",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"78c64460-0395-407b-a8d0-b2745f9989d7"
],
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"visible": true
},
"92c0fcf7-ec8a-45c3-ab5b-65be4999123f": {
"id": "92c0fcf7-ec8a-45c3-ab5b-65be4999123f",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"c1e5805f-d5c4-4230-8e99-c82cac75d2de"
],
"scene": "a9583cd1-1617-4328-9306-3f5b8e108bcd",
"visible": true
},
"c43f1caf-46f4-491a-b644-82b21871dfe7": {
"id": "c43f1caf-46f4-491a-b644-82b21871dfe7",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"f6ce6d4e-98c8-47aa-9666-e0318b918fe2"
],
"scene": "a9583cd1-1617-4328-9306-3f5b8e108bcd",
"visible": true
},
"2f3f3b91-7618-48bd-94d1-c6e74688f848": {
"id": "2f3f3b91-7618-48bd-94d1-c6e74688f848",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"7a2d0fe7-e486-4589-8e0e-c8859aa4a6a8"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"e703894a-ce34-43a3-814a-e343c75eafc3": {
"id": "e703894a-ce34-43a3-814a-e343c75eafc3",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"e5f9b1d9-631a-4687-9985-1595854bc608"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"c778370e-5a6a-43d3-9729-0216b78c08ee": {
"id": "c778370e-5a6a-43d3-9729-0216b78c08ee",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"f424422a-1c70-4cee-87d7-023ca72446dd"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"2d5e54e3-db28-41ff-8f67-6931bf21f1a3": {
"id": "2d5e54e3-db28-41ff-8f67-6931bf21f1a3",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"41f68bf4-077a-4c50-83be-54b65408bc82"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"a5b7b668-fb3f-492b-b400-c791847defd5": {
"id": "a5b7b668-fb3f-492b-b400-c791847defd5",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"a229703c-f45c-418f-8d34-aa1deccddf8c"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"493824e6-64c5-458d-ba18-fd063d8e9ff1": {
"id": "493824e6-64c5-458d-ba18-fd063d8e9ff1",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"bfe102f5-ec78-48a2-86b3-e0f84192fef3"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"2f0ebbee-b557-4fc2-8648-f980389eb0c9": {
"id": "2f0ebbee-b557-4fc2-8648-f980389eb0c9",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"8404e451-6e80-4af0-8451-747612f1aa6c"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
},
"6c49376b-5868-4bd9-8058-7407a5302047": {
"id": "6c49376b-5868-4bd9-8058-7407a5302047",
"name": "",
"is_fold": false,
"is_group": false,
"actors": [
"9fd12f6a-b98c-4ed5-9567-6f94a14d6f3e"
],
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"visible": true
}
},
"sprites": [
{
"id": "b3fac116-4a7f-40e2-8900-642e8cadeca8",
"name": "新角色",
"scene": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
"x": -2.8608935025048368,
"y": 351.68883894651026,
"scale": 68.70581850885148,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "93afb9a1-fb4b-45c7-8a56-2ff1e299062c",
"costumes": {
"93afb9a1-fb4b-45c7-8a56-2ff1e299062c": {
"asset": "assets/93afb9a1-fb4b-45c7-8a56-2ff1e299062c.svg",
"name": "新角色",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"tMxulbLy6mV1Pc8br9FA": {
"type": "on_keydown",
"id": "tMxulbLy6mV1Pc8br9FA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
97.77777862548828,
226.4442596435547
]
},
"ZCAQqiHslKYpuolSCgra": {
"type": "user_id_get",
"id": "ZCAQqiHslKYpuolSCgra",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
115.55554962158203,
696.6644287109375
],
"parent_id": "1pUIKvCwH7uQxGTv86Cx"
},
"nhPPltZm07MVdEt2slkJ": {
"type": "controls_if",
"id": "nhPPltZm07MVdEt2slkJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
414.2220458984375
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"TVH2IhtPMKNKkvlFboOI\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "tMxulbLy6mV1Pc8br9FA"
},
"1pUIKvCwH7uQxGTv86Cx": {
"type": "logic_compare",
"id": "1pUIKvCwH7uQxGTv86Cx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"svzCtMjp52oEZNI770AN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"QR1DwneqQWzxQw7ZL0SB\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
204.44444274902344,
580.2219848632812
],
"parent_id": "nhPPltZm07MVdEt2slkJ"
},
"QR1DwneqQWzxQw7ZL0SB": {
"type": "math_number",
"id": "QR1DwneqQWzxQw7ZL0SB",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1pUIKvCwH7uQxGTv86Cx"
},
"JxHjn3NfRz3uJMkrGNiL": {
"type": "text",
"id": "JxHjn3NfRz3uJMkrGNiL",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SPGFaYMJJdhFIwr8Dymx"
},
"SPGFaYMJJdhFIwr8Dymx": {
"type": "self_ask",
"id": "SPGFaYMJJdhFIwr8Dymx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
634.2220458984375
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"JxHjn3NfRz3uJMkrGNiL\" visible=\"visible\"><field name=\"TEXT\">你的名字</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "nhPPltZm07MVdEt2slkJ"
},
"F3nbkKDDQVNBaYRkNtHN": {
"type": "change_cloud_variable",
"id": "F3nbkKDDQVNBaYRkNtHN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"DqeW2B4NFc4VZzNco1Dn\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
110,
509.1089172363281
],
"parent_id": "SPGFaYMJJdhFIwr8Dymx"
},
"LiLadzkGLGe1M8h4gEFQ": {
"type": "get_answer",
"id": "LiLadzkGLGe1M8h4gEFQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
687.555419921875
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "F3nbkKDDQVNBaYRkNtHN"
},
"2qEWsFJFi4EK2ANzxUXS": {
"type": "get_current_scene",
"id": "2qEWsFJFi4EK2ANzxUXS",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ng8AhM5mOlDTmycoVwYL"
},
"ng8AhM5mOlDTmycoVwYL": {
"type": "switch_to_screen",
"id": "ng8AhM5mOlDTmycoVwYL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
811.999755859375
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"2qEWsFJFi4EK2ANzxUXS\" visible=\"visible\" inline=\"true\"><field name=\"scene\">b5e60282-a2d1-478b-802d-a30e77d67e6b</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "F3nbkKDDQVNBaYRkNtHN"
}
},
"connections": {
"tMxulbLy6mV1Pc8br9FA": {
"nhPPltZm07MVdEt2slkJ": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"ZCAQqiHslKYpuolSCgra": {},
"nhPPltZm07MVdEt2slkJ": {
"1pUIKvCwH7uQxGTv86Cx": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"SPGFaYMJJdhFIwr8Dymx": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"1pUIKvCwH7uQxGTv86Cx": {
"QR1DwneqQWzxQw7ZL0SB": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"ZCAQqiHslKYpuolSCgra": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"QR1DwneqQWzxQw7ZL0SB": {},
"JxHjn3NfRz3uJMkrGNiL": {},
"SPGFaYMJJdhFIwr8Dymx": {
"JxHjn3NfRz3uJMkrGNiL": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"F3nbkKDDQVNBaYRkNtHN": {
"type": "next"
}
},
"F3nbkKDDQVNBaYRkNtHN": {
"LiLadzkGLGe1M8h4gEFQ": {
"type": "input",
"input_type": "value",
"input_name": "n"
},
"ng8AhM5mOlDTmycoVwYL": {
"type": "next"
}
},
"LiLadzkGLGe1M8h4gEFQ": {},
"2qEWsFJFi4EK2ANzxUXS": {},
"ng8AhM5mOlDTmycoVwYL": {
"2qEWsFJFi4EK2ANzxUXS": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
}
},
"comments": {}
}
},
{
"id": "d21d18ae-48bb-451d-8405-3ad337a161b8",
"name": "空白按钮",
"scene": "b5e60282-a2d1-478b-802d-a30e77d67e6b",
"x": 6.3829787234042215,
"y": -186.17021276595744,
"scale": 52.347971781921665,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "ccf604f3-5f46-4906-a313-44e6f9d2751f",
"costumes": {
"ccf604f3-5f46-4906-a313-44e6f9d2751f": {
"asset": "assets/ccf604f3-5f46-4906-a313-44e6f9d2751f.svg",
"name": "空白按钮（3）",
"pivot": {
"x": 5.230864570738618,
"y": -4.161798266779442
},
"rotateCenter": {
"x": 5.230864570738618,
"y": -4.161798266779442
}
}
},
"scripts": {
"blocks": {
"qxd3gStIlHgkTVvmwIgu": {
"type": "sprite_on_tap",
"id": "qxd3gStIlHgkTVvmwIgu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
28.888893127441406,
79.777587890625
]
},
"AJAO4YgbGtYUF0QACIKr": {
"type": "play_audio_2",
"id": "AJAO4YgbGtYUF0QACIKr",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-94.44444274902344,
405.3289794921875
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"aYL4HRMOIchO2HhHEVmY\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">b815cb80-1674-4d3c-8b6e-43bdd59391d8</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "qxd3gStIlHgkTVvmwIgu"
},
"aYL4HRMOIchO2HhHEVmY": {
"type": "get_audios",
"id": "aYL4HRMOIchO2HhHEVmY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": ""
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AJAO4YgbGtYUF0QACIKr"
},
"lJhbLfvo3pRcrKURNGKq": {
"type": "get_current_scene",
"id": "lJhbLfvo3pRcrKURNGKq",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "__next_scene"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "uEm3KyAyGX2mvt3OTSm6"
},
"uEm3KyAyGX2mvt3OTSm6": {
"type": "switch_to_screen",
"id": "uEm3KyAyGX2mvt3OTSm6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-94.44444274902344,
756.4442138671875
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"lJhbLfvo3pRcrKURNGKq\" visible=\"visible\" inline=\"true\"><field name=\"scene\">b5e60282-a2d1-478b-802d-a30e77d67e6b</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "AJAO4YgbGtYUF0QACIKr"
}
},
"connections": {
"qxd3gStIlHgkTVvmwIgu": {
"AJAO4YgbGtYUF0QACIKr": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"AJAO4YgbGtYUF0QACIKr": {
"aYL4HRMOIchO2HhHEVmY": {
"type": "input",
"input_type": "value",
"input_name": "audio"
},
"uEm3KyAyGX2mvt3OTSm6": {
"type": "next"
}
},
"aYL4HRMOIchO2HhHEVmY": {},
"lJhbLfvo3pRcrKURNGKq": {},
"uEm3KyAyGX2mvt3OTSm6": {
"lJhbLfvo3pRcrKURNGKq": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
}
},
"comments": {}
}
},
{
"id": "7596093f-7852-4fc2-9db7-7724e6cd6227",
"name": "速度",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 260,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "e6f48bd0-e9cd-4f6e-92d9-000e1ec58361",
"costumes": {
"e6f48bd0-e9cd-4f6e-92d9-000e1ec58361": {
"asset": "assets/e6f48bd0-e9cd-4f6e-92d9-000e1ec58361.svg",
"name": "速度",
"pivot": {
"x": -5.347378344675803,
"y": -52.3420460138268
},
"rotateCenter": {
"x": -5.347378344675803,
"y": -52.3420460138268
}
}
},
"scripts": {
"blocks": {
"SJgVZoJZMRrmqwiQW8m7": {
"type": "sprite_on_tap",
"id": "SJgVZoJZMRrmqwiQW8m7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
66.66667175292969,
24.777576446533203
]
},
"oP30UyxyiH5npJjR9Ra0": {
"type": "on_keydown",
"id": "oP30UyxyiH5npJjR9Ra0",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "83"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
164.44444274902344,
314.7775573730469
]
},
"TlH1iZGWOqUUVF5HkdrB": {
"type": "controls_if",
"id": "TlH1iZGWOqUUVF5HkdrB",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eIV7clX5E6KjSkYd0glh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
257.77777099609375,
401.44427490234375
],
"parent_id": "WraKjVEyf1EIwDfzShMO"
},
"JxfhmjVmsgvfjYUGQdBQ": {
"type": "variables_get",
"id": "JxfhmjVmsgvfjYUGQdBQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
23.333335876464844,
524.7713623046875
],
"parent_id": "GsYcXAymdOz7LAok45Wk"
},
"1UMp2BTeop5ZUDWh4e4T": {
"type": "math_number",
"id": "1UMp2BTeop5ZUDWh4e4T",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "23"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "GsYcXAymdOz7LAok45Wk"
},
"GsYcXAymdOz7LAok45Wk": {
"type": "logic_compare",
"id": "GsYcXAymdOz7LAok45Wk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"NcTFkacoPyLORVRRFAvS\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"1UMp2BTeop5ZUDWh4e4T\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "LTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
85.55555725097656,
586.3331298828125
],
"parent_id": "TlH1iZGWOqUUVF5HkdrB"
},
"FD5TVDDitxMFHuzaOURY": {
"type": "change_variable",
"id": "FD5TVDDitxMFHuzaOURY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-34.44444274902344,
586.3263549804688
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"MfzLPY8yucM7Pedha48C\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"method": "increase",
"valname": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "TlH1iZGWOqUUVF5HkdrB"
},
"MfzLPY8yucM7Pedha48C": {
"type": "math_number",
"id": "MfzLPY8yucM7Pedha48C",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FD5TVDDitxMFHuzaOURY"
},
"S6EBQuDjPLkRxw25GFTg": {
"type": "variables_set",
"id": "S6EBQuDjPLkRxw25GFTg",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-34.44444274902344,
532.9931030273438
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ZZvuornOzw8GMwoedjQj\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "TlH1iZGWOqUUVF5HkdrB"
},
"ZZvuornOzw8GMwoedjQj": {
"type": "math_number",
"id": "ZZvuornOzw8GMwoedjQj",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "5"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "S6EBQuDjPLkRxw25GFTg"
},
"a7IJeIP8cNgepiD5OQIY": {
"type": "set_timer_state",
"id": "a7IJeIP8cNgepiD5OQIY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
518.888916015625,
692.11083984375
],
"parent_id": "TlH1iZGWOqUUVF5HkdrB"
},
"WraKjVEyf1EIwDfzShMO": {
"type": "controls_if",
"id": "WraKjVEyf1EIwDfzShMO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"PDbRJ3ZfpS4C7KJMJf2b\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
250,
398.11090087890625
],
"parent_id": "oP30UyxyiH5npJjR9Ra0"
},
"wVGS9E9y5S6d3kRub9ZE": {
"type": "get_timer",
"id": "wVGS9E9y5S6d3kRub9ZE",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
151.11111450195312,
682.3331909179688
],
"parent_id": "ZwGCMJp5OzBzGrc3Jdss"
},
"6iRaCcN3x5hSVZlxZIz1": {
"type": "show_hide_timer",
"id": "6iRaCcN3x5hSVZlxZIz1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"state": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
334.4444580078125,
198.11090087890625
],
"parent_id": "lJonKLborAt3Twf1gp1j"
},
"lJonKLborAt3Twf1gp1j": {
"type": "on_running_group_activated",
"id": "lJonKLborAt3Twf1gp1j",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
341.1111145019531,
48.11094665527344
]
},
"ZwGCMJp5OzBzGrc3Jdss": {
"type": "logic_compare",
"id": "ZwGCMJp5OzBzGrc3Jdss",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9vBP0ICRb5wjZPOKnHri\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"g9oQNR3X5y8Y2rdxohWN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
115.55555725097656,
645.2220458984375
],
"parent_id": "WraKjVEyf1EIwDfzShMO"
},
"g9oQNR3X5y8Y2rdxohWN": {
"type": "math_number",
"id": "g9oQNR3X5y8Y2rdxohWN",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZwGCMJp5OzBzGrc3Jdss"
},
"DpCQlbYLLFT6NU1iuucd": {
"type": "set_timer_state",
"id": "DpCQlbYLLFT6NU1iuucd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
153,
630
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "a7IJeIP8cNgepiD5OQIY"
},
"rtXrGVuddtA0NYtvP9DA": {
"type": "set_timer_state",
"id": "rtXrGVuddtA0NYtvP9DA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "6iRaCcN3x5hSVZlxZIz1"
},
"MYSj1FAYcdvHziqG8bHY": {
"type": "math_number",
"id": "MYSj1FAYcdvHziqG8bHY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZSDtp2iTKKBb6MlPA0Fj"
},
"ZSDtp2iTKKBb6MlPA0Fj": {
"type": "wait",
"id": "ZSDtp2iTKKBb6MlPA0Fj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
474.1109619140625
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"MYSj1FAYcdvHziqG8bHY\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "rtXrGVuddtA0NYtvP9DA"
},
"MxQYTuyR8qaHHVwapKPz": {
"type": "set_timer_state",
"id": "MxQYTuyR8qaHHVwapKPz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "stop"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ZSDtp2iTKKBb6MlPA0Fj"
},
"0SAFoUGntxEV0gYWHSJV": {
"type": "get_timer",
"id": "0SAFoUGntxEV0gYWHSJV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PjBjTMcoiJlfJdOaL1aU"
},
"3AnkV7jnv1rHP0J7dU1g": {
"type": "controls_if",
"id": "3AnkV7jnv1rHP0J7dU1g",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"jFm78aHdebadGG5EWzQd\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "qTb3WQRCZlVeCBtDF85N"
},
"9jCgYA0PnPxINCTy9wmf": {
"type": "set_timer_state",
"id": "9jCgYA0PnPxINCTy9wmf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "3AnkV7jnv1rHP0J7dU1g"
},
"BhR62NAL8FGzyTz7LjsO": {
"type": "math_number",
"id": "BhR62NAL8FGzyTz7LjsO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "23"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "eeK9MlWQ3ORuU0hnClYh"
},
"MIslYzbm0px75CjsrFd1": {
"type": "math_number",
"id": "MIslYzbm0px75CjsrFd1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "oDfEFYmkneUTgOQsn6mL"
},
"OmVSqpC5kyg4ZYpla4xg": {
"type": "math_number",
"id": "OmVSqpC5kyg4ZYpla4xg",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PjBjTMcoiJlfJdOaL1aU"
},
"PjBjTMcoiJlfJdOaL1aU": {
"type": "logic_compare",
"id": "PjBjTMcoiJlfJdOaL1aU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"RY8AiUYUVEv4OvI9KVj9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"OmVSqpC5kyg4ZYpla4xg\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0.1</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qTb3WQRCZlVeCBtDF85N"
},
"Ubq4SaLHWvz6wgJt5Iou": {
"type": "variables_set",
"id": "Ubq4SaLHWvz6wgJt5Iou",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"gO8vyDGlmjD0j2DA15zU\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">5</field></shadow>"
},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "3AnkV7jnv1rHP0J7dU1g"
},
"badWdHfZ4Fwp2clMU1qL": {
"type": "set_timer_state",
"id": "badWdHfZ4Fwp2clMU1qL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "9jCgYA0PnPxINCTy9wmf"
},
"eeK9MlWQ3ORuU0hnClYh": {
"type": "logic_compare",
"id": "eeK9MlWQ3ORuU0hnClYh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"WXHGO2J2v4A8FQk5Xha5\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"BhR62NAL8FGzyTz7LjsO\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">23</field></shadow>"
},
"fields": {
"OP": "LTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "3AnkV7jnv1rHP0J7dU1g"
},
"gO8vyDGlmjD0j2DA15zU": {
"type": "math_number",
"id": "gO8vyDGlmjD0j2DA15zU",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "5"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Ubq4SaLHWvz6wgJt5Iou"
},
"hJMOBTi91ycyDPgh7MOw": {
"type": "variables_get",
"id": "hJMOBTi91ycyDPgh7MOw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "eeK9MlWQ3ORuU0hnClYh"
},
"oDfEFYmkneUTgOQsn6mL": {
"type": "change_variable",
"id": "oDfEFYmkneUTgOQsn6mL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"MIslYzbm0px75CjsrFd1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">3</field></shadow>"
},
"fields": {
"valname": "abb63166-ea57-4527-bd1a-0e4df9c62823",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "3AnkV7jnv1rHP0J7dU1g"
},
"qTb3WQRCZlVeCBtDF85N": {
"type": "controls_if",
"id": "qTb3WQRCZlVeCBtDF85N",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
260,
547
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"RyovysKN6soRdoSiqgqJ\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "SJgVZoJZMRrmqwiQW8m7"
},
"1xTsH6HOXEK3d1WkG4JZ": {
"type": "self_appear",
"id": "1xTsH6HOXEK3d1WkG4JZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "TisCSp61x5emEBWK7YXJ"
},
"9j274MxIhF4eFKyllNJ5": {
"type": "self_listen",
"id": "9j274MxIhF4eFKyllNJ5",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
481.3425598144531,
-93.33333587646484
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"w8s5srYOI8O4ixdpR3Gq\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"IZbXA600MjvJbXxrtCkK": {
"type": "self_disappear",
"id": "IZbXA600MjvJbXxrtCkK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "9j274MxIhF4eFKyllNJ5"
},
"QIGESVWNl9M4HPUrzjAY": {
"type": "broadcast_input",
"id": "QIGESVWNl9M4HPUrzjAY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "TisCSp61x5emEBWK7YXJ"
},
"TisCSp61x5emEBWK7YXJ": {
"type": "self_listen",
"id": "TisCSp61x5emEBWK7YXJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
529.3425903320312,
2.6666667461395264
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"QIGESVWNl9M4HPUrzjAY\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"w8s5srYOI8O4ixdpR3Gq": {
"type": "broadcast_input",
"id": "w8s5srYOI8O4ixdpR3Gq",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "9j274MxIhF4eFKyllNJ5"
}
},
"connections": {
"SJgVZoJZMRrmqwiQW8m7": {
"qTb3WQRCZlVeCBtDF85N": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"oP30UyxyiH5npJjR9Ra0": {
"WraKjVEyf1EIwDfzShMO": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"TlH1iZGWOqUUVF5HkdrB": {
"GsYcXAymdOz7LAok45Wk": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"FD5TVDDitxMFHuzaOURY": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"S6EBQuDjPLkRxw25GFTg": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"a7IJeIP8cNgepiD5OQIY": {
"type": "next"
}
},
"JxfhmjVmsgvfjYUGQdBQ": {},
"1UMp2BTeop5ZUDWh4e4T": {},
"GsYcXAymdOz7LAok45Wk": {
"1UMp2BTeop5ZUDWh4e4T": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"JxfhmjVmsgvfjYUGQdBQ": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"FD5TVDDitxMFHuzaOURY": {
"MfzLPY8yucM7Pedha48C": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"MfzLPY8yucM7Pedha48C": {},
"S6EBQuDjPLkRxw25GFTg": {
"ZZvuornOzw8GMwoedjQj": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"ZZvuornOzw8GMwoedjQj": {},
"a7IJeIP8cNgepiD5OQIY": {
"DpCQlbYLLFT6NU1iuucd": {
"type": "next"
}
},
"WraKjVEyf1EIwDfzShMO": {
"TlH1iZGWOqUUVF5HkdrB": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"ZwGCMJp5OzBzGrc3Jdss": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
},
"wVGS9E9y5S6d3kRub9ZE": {},
"6iRaCcN3x5hSVZlxZIz1": {
"rtXrGVuddtA0NYtvP9DA": {
"type": "next"
}
},
"lJonKLborAt3Twf1gp1j": {
"6iRaCcN3x5hSVZlxZIz1": {
"type": "next"
}
},
"ZwGCMJp5OzBzGrc3Jdss": {
"g9oQNR3X5y8Y2rdxohWN": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"wVGS9E9y5S6d3kRub9ZE": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"g9oQNR3X5y8Y2rdxohWN": {},
"DpCQlbYLLFT6NU1iuucd": {},
"rtXrGVuddtA0NYtvP9DA": {
"ZSDtp2iTKKBb6MlPA0Fj": {
"type": "next"
}
},
"MYSj1FAYcdvHziqG8bHY": {},
"ZSDtp2iTKKBb6MlPA0Fj": {
"MYSj1FAYcdvHziqG8bHY": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"MxQYTuyR8qaHHVwapKPz": {
"type": "next"
}
},
"MxQYTuyR8qaHHVwapKPz": {},
"0SAFoUGntxEV0gYWHSJV": {},
"3AnkV7jnv1rHP0J7dU1g": {
"9jCgYA0PnPxINCTy9wmf": {
"type": "next"
},
"Ubq4SaLHWvz6wgJt5Iou": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"eeK9MlWQ3ORuU0hnClYh": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"oDfEFYmkneUTgOQsn6mL": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"9jCgYA0PnPxINCTy9wmf": {
"badWdHfZ4Fwp2clMU1qL": {
"type": "next"
}
},
"BhR62NAL8FGzyTz7LjsO": {},
"MIslYzbm0px75CjsrFd1": {},
"OmVSqpC5kyg4ZYpla4xg": {},
"PjBjTMcoiJlfJdOaL1aU": {
"0SAFoUGntxEV0gYWHSJV": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"OmVSqpC5kyg4ZYpla4xg": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"Ubq4SaLHWvz6wgJt5Iou": {
"gO8vyDGlmjD0j2DA15zU": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"badWdHfZ4Fwp2clMU1qL": {},
"eeK9MlWQ3ORuU0hnClYh": {
"BhR62NAL8FGzyTz7LjsO": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"hJMOBTi91ycyDPgh7MOw": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"gO8vyDGlmjD0j2DA15zU": {},
"hJMOBTi91ycyDPgh7MOw": {},
"oDfEFYmkneUTgOQsn6mL": {
"MIslYzbm0px75CjsrFd1": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"qTb3WQRCZlVeCBtDF85N": {
"3AnkV7jnv1rHP0J7dU1g": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"PjBjTMcoiJlfJdOaL1aU": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
},
"1xTsH6HOXEK3d1WkG4JZ": {},
"9j274MxIhF4eFKyllNJ5": {
"IZbXA600MjvJbXxrtCkK": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"w8s5srYOI8O4ixdpR3Gq": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"IZbXA600MjvJbXxrtCkK": {},
"QIGESVWNl9M4HPUrzjAY": {},
"TisCSp61x5emEBWK7YXJ": {
"1xTsH6HOXEK3d1WkG4JZ": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"QIGESVWNl9M4HPUrzjAY": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"w8s5srYOI8O4ixdpR3Gq": {}
},
"comments": {}
}
},
{
"id": "f506aa57-60de-4e48-a348-9bced54d7b3d",
"name": "返回",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -276.8070997084476,
"y": -421.0650558713826,
"scale": 10,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "7f85355f-5235-4822-a5c1-ff5f94787eb6",
"costumes": {
"7f85355f-5235-4822-a5c1-ff5f94787eb6": {
"asset": "assets/7f85355f-5235-4822-a5c1-ff5f94787eb6.svg",
"name": "返回",
"pivot": {
"x": 16.535291565304647,
"y": 43.131036246155986
},
"rotateCenter": {
"x": 16.535291565304647,
"y": 43.131036246155986
}
}
},
"scripts": {
"blocks": {
"u9YZ385AkxyIDl39AiSx": {
"type": "sprite_on_tap",
"id": "u9YZ385AkxyIDl39AiSx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
112.22222137451172,
184.22201538085938
]
},
"EgG64pTGT9twLmTRqhyx": {
"type": "get_current_scene",
"id": "EgG64pTGT9twLmTRqhyx",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "l18lyBjTCshVp038Find"
},
"l18lyBjTCshVp038Find": {
"type": "switch_to_screen",
"id": "l18lyBjTCshVp038Find",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
97.55536651611328
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"EgG64pTGT9twLmTRqhyx\" visible=\"visible\" inline=\"true\"><field name=\"scene\">6e4bbd50-f319-4c3e-ba74-4017c364a7c5</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "8sFrg0shbMohE2TRoqZv"
},
"EtxRDFK6HzezaPTMirjt": {
"type": "change_cloud_variable",
"id": "EtxRDFK6HzezaPTMirjt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"C4sfEGlDG0KGHEasn472\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "vu3w5b2OkdWzRidnKOUJ"
},
"F2xxiybdIl8hbSJYzW3Q": {
"type": "user_id_get",
"id": "F2xxiybdIl8hbSJYzW3Q",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YXhAt7ZZrXMxXlicBo4g"
},
"LHjg0Ts0EVOQVPNMAeka": {
"type": "get_answer",
"id": "LHjg0Ts0EVOQVPNMAeka",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EtxRDFK6HzezaPTMirjt"
},
"OiidKtOiUSe7FmQ0sYW3": {
"type": "controls_if",
"id": "OiidKtOiUSe7FmQ0sYW3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"HjPgHOV3Xn44Yq3oxXU5\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "mlOxRy4O5TWINjjw3556"
},
"YXhAt7ZZrXMxXlicBo4g": {
"type": "logic_compare",
"id": "YXhAt7ZZrXMxXlicBo4g",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"RVYQ8PDJqhInMYShXkdG\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"lJwaOKKAhFVMmabsWlLv\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">539843282</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "OiidKtOiUSe7FmQ0sYW3"
},
"lJwaOKKAhFVMmabsWlLv": {
"type": "math_number",
"id": "lJwaOKKAhFVMmabsWlLv",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YXhAt7ZZrXMxXlicBo4g"
},
"mlOxRy4O5TWINjjw3556": {
"type": "on_keydown",
"id": "mlOxRy4O5TWINjjw3556",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
690.2777709960938,
234.44444274902344
]
},
"pXGE3VfLVaCfIROpOVUv": {
"type": "text",
"id": "pXGE3VfLVaCfIROpOVUv",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vu3w5b2OkdWzRidnKOUJ"
},
"vu3w5b2OkdWzRidnKOUJ": {
"type": "self_ask",
"id": "vu3w5b2OkdWzRidnKOUJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"pXGE3VfLVaCfIROpOVUv\" visible=\"visible\"><field name=\"TEXT\">请输入开发者模式要多少个金币：</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "OiidKtOiUSe7FmQ0sYW3"
},
"8sFrg0shbMohE2TRoqZv": {
"type": "show_hide_variable",
"id": "8sFrg0shbMohE2TRoqZv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "7b160e91-8427-47d2-9168-15b00a7a8fc2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
132.22222900390625,
226.8861083984375
],
"parent_id": "u9YZ385AkxyIDl39AiSx"
}
},
"connections": {
"u9YZ385AkxyIDl39AiSx": {
"8sFrg0shbMohE2TRoqZv": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"EgG64pTGT9twLmTRqhyx": {},
"l18lyBjTCshVp038Find": {
"EgG64pTGT9twLmTRqhyx": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"EtxRDFK6HzezaPTMirjt": {
"LHjg0Ts0EVOQVPNMAeka": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"F2xxiybdIl8hbSJYzW3Q": {},
"LHjg0Ts0EVOQVPNMAeka": {},
"OiidKtOiUSe7FmQ0sYW3": {
"YXhAt7ZZrXMxXlicBo4g": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"vu3w5b2OkdWzRidnKOUJ": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"YXhAt7ZZrXMxXlicBo4g": {
"F2xxiybdIl8hbSJYzW3Q": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"lJwaOKKAhFVMmabsWlLv": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"lJwaOKKAhFVMmabsWlLv": {},
"mlOxRy4O5TWINjjw3556": {
"OiidKtOiUSe7FmQ0sYW3": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"pXGE3VfLVaCfIROpOVUv": {},
"vu3w5b2OkdWzRidnKOUJ": {
"EtxRDFK6HzezaPTMirjt": {
"type": "next"
},
"pXGE3VfLVaCfIROpOVUv": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"8sFrg0shbMohE2TRoqZv": {
"l18lyBjTCshVp038Find": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "921e60b7-e6d0-45b4-b5d6-614b708bd057",
"name": "新角色(2)",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": -287.57228849406215,
"y": 500,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "e3b52a95-c5f1-4230-b0b7-7b43264f8459",
"costumes": {
"e3b52a95-c5f1-4230-b0b7-7b43264f8459": {
"asset": "assets/e3b52a95-c5f1-4230-b0b7-7b43264f8459.svg",
"name": "新角色(2)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"8mGQ5PCZ5IQEBDl3Vg8a": {
"type": "on_running_group_activated",
"id": "8mGQ5PCZ5IQEBDl3Vg8a",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
144.44444274902344,
76.44425964355469
]
},
"ywPIsmOhvvyFMF0uaJ0Q": {
"type": "repeat_forever",
"id": "ywPIsmOhvvyFMF0uaJ0Q",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
44.2220344543457
],
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "8mGQ5PCZ5IQEBDl3Vg8a"
},
"lr708h8AkgEviJIgipOI": {
"type": "mirror",
"id": "lr708h8AkgEviJIgipOI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
749.7777099609375
],
"shadows": {},
"fields": {
"sprite": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ywPIsmOhvvyFMF0uaJ0Q"
},
"ZIDoiI95lDxXzMuZIG3R": {
"type": "wait",
"id": "ZIDoiI95lDxXzMuZIG3R",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
703.5553588867188
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"1eCHreuabYsehZf85nRW\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">0.3</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "lr708h8AkgEviJIgipOI"
},
"U87YFfLG7LZxpUhP1uln": {
"type": "start_as_a_mirror",
"id": "U87YFfLG7LZxpUhP1uln",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
111.1111068725586,
490.8887939453125
]
},
"YKPTMuJoWV0AwNWEKcim": {
"type": "repeat_forever_until",
"id": "YKPTMuJoWV0AwNWEKcim",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
230.88868713378906
],
"shadows": {
"condition": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eN5Kk5hczmI8CKDK0OTr\" visible=\"visible\" editable=\"false\"></empty>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "h7G3Z85Fuo6cELbiySXr"
},
"4hMDTzIXHnEpcJlIF5Gk": {
"type": "self_out_of_boundary",
"id": "4hMDTzIXHnEpcJlIF5Gk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
241.5553436279297
],
"shadows": {},
"fields": {
"boundary": "3"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YKPTMuJoWV0AwNWEKcim"
},
"mi6VHkdOr6vVUgH4lMmu": {
"type": "self_change_coordinate",
"id": "mi6VHkdOr6vVUgH4lMmu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"U9YitQxSeFG9mWtD5XPS\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10</field></shadow>"
},
"fields": {
"coordinary": "y",
"increase": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
133.77777099609375,
684.6665649414062
],
"parent_id": "YKPTMuJoWV0AwNWEKcim"
},
"Ii0uGBhy8aM2XvkoNR1v": {
"type": "self_appear",
"id": "Ii0uGBhy8aM2XvkoNR1v",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
442.2221984863281,
536.4443359375
],
"parent_id": "2S3v37Lk2eKd1IIgEIVy"
},
"h7G3Z85Fuo6cELbiySXr": {
"type": "self_set_position",
"id": "h7G3Z85Fuo6cELbiySXr",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"AME8NoqfYlTqc08uZLUp\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {
"coordinary": "x"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
117.77777862548828,
571.999755859375
],
"parent_id": "Ii0uGBhy8aM2XvkoNR1v"
},
"LCGolsVyew5InHt46CIf": {
"type": "math_number",
"id": "LCGolsVyew5InHt46CIf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "-350"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "aYPNAUklrRwD7Oopjkig"
},
"aYPNAUklrRwD7Oopjkig": {
"type": "random",
"id": "aYPNAUklrRwD7Oopjkig",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
309.55535888671875
],
"shadows": {
"a": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"LCGolsVyew5InHt46CIf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">0</field></shadow>",
"b": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"vb4FnJmvbvkeXCzqw6Op\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">5</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "h7G3Z85Fuo6cELbiySXr"
},
"vb4FnJmvbvkeXCzqw6Op": {
"type": "math_number",
"id": "vb4FnJmvbvkeXCzqw6Op",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "350"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "aYPNAUklrRwD7Oopjkig"
},
"2LMnD6ELmuke1UqOogK2": {
"type": "change_cloud_variable",
"id": "2LMnD6ELmuke1UqOogK2",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
421.7759094238281
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"loTH0CTf5FtHGJpGoJh9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "YKPTMuJoWV0AwNWEKcim"
},
"loTH0CTf5FtHGJpGoJh9": {
"type": "math_number",
"id": "loTH0CTf5FtHGJpGoJh9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "2LMnD6ELmuke1UqOogK2"
},
"tw2SuQYhBvLv5oGeBI14": {
"type": "dispose_clone",
"id": "tw2SuQYhBvLv5oGeBI14",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
159.99998474121094,
1070.4443359375
],
"parent_id": "hlwWprgOa1XujiMvRLXG"
},
"5FnuseoTqa9ya7Wm61Ud": {
"type": "play_audio_2",
"id": "5FnuseoTqa9ya7Wm61Ud",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"mQQ6SmeaSwChGv0vKOoz\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">77fbdcf3-4154-48bd-997d-35c212a0c088</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
153.33331298828125,
937.1109619140625
],
"parent_id": "hlwWprgOa1XujiMvRLXG"
},
"mQQ6SmeaSwChGv0vKOoz": {
"type": "get_audios",
"id": "mQQ6SmeaSwChGv0vKOoz",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5FnuseoTqa9ya7Wm61Ud"
},
"jTAFsw6InwRfdQcFuYMR": {
"type": "start_as_a_mirror",
"id": "jTAFsw6InwRfdQcFuYMR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
686.6666259765625,
909.1109619140625
]
},
"02ISv055Ul30QaTs4xcj": {
"type": "repeat_forever",
"id": "02ISv055Ul30QaTs4xcj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
161.33303833007812
],
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "jTAFsw6InwRfdQcFuYMR"
},
"XrHbfTUHXAeHx5O4O6SG": {
"type": "bump",
"id": "XrHbfTUHXAeHx5O4O6SG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite1": "__self",
"sprite2": "835ca8ad-4613-433f-9692-99e474dc1ddd"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "jNk8jSFCgXf3nnDEREFT"
},
"jNk8jSFCgXf3nnDEREFT": {
"type": "controls_if",
"id": "jNk8jSFCgXf3nnDEREFT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
146.74420166015625,
283.22796630859375
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"obBXSTPLx9efjEFrRoSX\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "02ISv055Ul30QaTs4xcj"
},
"daCGsK4hj8v8bKW66HtC": {
"type": "dispose_clone",
"id": "daCGsK4hj8v8bKW66HtC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
200.88888549804688,
994.2219848632812
],
"parent_id": "jNk8jSFCgXf3nnDEREFT"
},
"2S3v37Lk2eKd1IIgEIVy": {
"type": "self_set_effect_2",
"id": "2S3v37Lk2eKd1IIgEIVy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"val": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"controller_shadow\" id=\"7L5MTv18UMqT8wdKmpFl\" visible=\"visible\"><field constraints=\"0,360,0,false\" exceptions=\"360\" name=\"NUM\">10</field></shadow>"
},
"fields": {
"scope": "0"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
140,
650.8887939453125
],
"parent_id": "U87YFfLG7LZxpUhP1uln"
},
"etiOIjOmfmk7M9VrHJ1U": {
"type": "variables_get",
"id": "etiOIjOmfmk7M9VrHJ1U",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
587.9970703125
],
"shadows": {},
"fields": {
"VAR": "7b160e91-8427-47d2-9168-15b00a7a8fc2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "2S3v37Lk2eKd1IIgEIVy"
},
"DZwGf1xsC3QAvM7yXIur": {
"type": "variables_get",
"id": "DZwGf1xsC3QAvM7yXIur",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
191.11109924316406,
1107.99609375
],
"parent_id": "nERqWwytg7AR84cZJEJD"
},
"bHZCNcaaJydMXKkrV6nZ": {
"type": "math_number",
"id": "bHZCNcaaJydMXKkrV6nZ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "nERqWwytg7AR84cZJEJD"
},
"nERqWwytg7AR84cZJEJD": {
"type": "logic_compare",
"id": "nERqWwytg7AR84cZJEJD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"cQdZJ8FhJzLF9gjK0WzA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"bHZCNcaaJydMXKkrV6nZ\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
144.44442749023438,
1171.7774658203125
],
"parent_id": "hlwWprgOa1XujiMvRLXG"
},
"hlwWprgOa1XujiMvRLXG": {
"type": "controls_if",
"id": "hlwWprgOa1XujiMvRLXG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"ircC8Vxj7gDbL09hW3uX\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
297.7777404785156,
977.9996948242188
],
"parent_id": "2LMnD6ELmuke1UqOogK2"
},
"3VCySTXVCiNhGFjHeJrO": {
"type": "variables_get",
"id": "3VCySTXVCiNhGFjHeJrO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
329.9999694824219,
750.2177734375
],
"parent_id": "mi6VHkdOr6vVUgH4lMmu"
},
"uYgnYh5NweN3FnW4uocq": {
"type": "variables_get",
"id": "uYgnYh5NweN3FnW4uocq",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
19.999982833862305,
397.9940490722656
],
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZIDoiI95lDxXzMuZIG3R"
},
"8hdXxYsArSZrY2WU9WsL": {
"type": "broadcast_input",
"id": "8hdXxYsArSZrY2WU9WsL",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "方块还原"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "hdWAsYdrNL1ZAiEhPLKG"
},
"hdWAsYdrNL1ZAiEhPLKG": {
"type": "self_listen",
"id": "hdWAsYdrNL1ZAiEhPLKG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"8hdXxYsArSZrY2WU9WsL\" visible=\"visible\"><field name=\"MESSAGE\">方块还原</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
365.5555419921875,
322.44403076171875
]
},
"gLS3w4VJD04kKADCapug": {
"type": "set_scale",
"id": "gLS3w4VJD04kKADCapug",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
19.999982833862305,
467.1107177734375
],
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"unvMPSusTuBzAGCYAWyC\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "hdWAsYdrNL1ZAiEhPLKG"
},
"unvMPSusTuBzAGCYAWyC": {
"type": "math_number",
"id": "unvMPSusTuBzAGCYAWyC",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "gLS3w4VJD04kKADCapug"
},
"mKKfzmh0DVO8SAkQMfKd": {
"type": "broadcast_input",
"id": "mKKfzmh0DVO8SAkQMfKd",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "方块减小"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "z1DEuKGnC5wPlEYpE8ID"
},
"z1DEuKGnC5wPlEYpE8ID": {
"type": "self_listen",
"id": "z1DEuKGnC5wPlEYpE8ID",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
414,
418
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"mKKfzmh0DVO8SAkQMfKd\" visible=\"visible\"><field name=\"MESSAGE\">方块还原</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"A7JQ4JiV1rA8vuNpg2eC": {
"type": "math_number",
"id": "A7JQ4JiV1rA8vuNpg2eC",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "5"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "OoFRwESfEPhwfQYgsZqa"
},
"OoFRwESfEPhwfQYgsZqa": {
"type": "self_change_scale_2",
"id": "OoFRwESfEPhwfQYgsZqa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
19.999982833862305,
520.444091796875
],
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"A7JQ4JiV1rA8vuNpg2eC\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10</field></shadow>"
},
"fields": {
"increase": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "z1DEuKGnC5wPlEYpE8ID"
}
},
"connections": {
"8mGQ5PCZ5IQEBDl3Vg8a": {
"ywPIsmOhvvyFMF0uaJ0Q": {
"type": "next"
}
},
"ywPIsmOhvvyFMF0uaJ0Q": {
"lr708h8AkgEviJIgipOI": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"lr708h8AkgEviJIgipOI": {
"ZIDoiI95lDxXzMuZIG3R": {
"type": "next"
}
},
"ZIDoiI95lDxXzMuZIG3R": {
"uYgnYh5NweN3FnW4uocq": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"U87YFfLG7LZxpUhP1uln": {
"2S3v37Lk2eKd1IIgEIVy": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"YKPTMuJoWV0AwNWEKcim": {
"4hMDTzIXHnEpcJlIF5Gk": {
"type": "input",
"input_type": "value",
"input_name": "condition"
},
"2LMnD6ELmuke1UqOogK2": {
"type": "next"
},
"mi6VHkdOr6vVUgH4lMmu": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"4hMDTzIXHnEpcJlIF5Gk": {},
"mi6VHkdOr6vVUgH4lMmu": {
"3VCySTXVCiNhGFjHeJrO": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"Ii0uGBhy8aM2XvkoNR1v": {
"h7G3Z85Fuo6cELbiySXr": {
"type": "next"
}
},
"h7G3Z85Fuo6cELbiySXr": {
"YKPTMuJoWV0AwNWEKcim": {
"type": "next"
},
"aYPNAUklrRwD7Oopjkig": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"LCGolsVyew5InHt46CIf": {},
"aYPNAUklrRwD7Oopjkig": {
"LCGolsVyew5InHt46CIf": {
"type": "input",
"input_type": "value",
"input_name": "a"
},
"vb4FnJmvbvkeXCzqw6Op": {
"type": "input",
"input_type": "value",
"input_name": "b"
}
},
"vb4FnJmvbvkeXCzqw6Op": {},
"2LMnD6ELmuke1UqOogK2": {
"loTH0CTf5FtHGJpGoJh9": {
"type": "input",
"input_type": "value",
"input_name": "n"
},
"hlwWprgOa1XujiMvRLXG": {
"type": "next"
}
},
"loTH0CTf5FtHGJpGoJh9": {},
"tw2SuQYhBvLv5oGeBI14": {},
"5FnuseoTqa9ya7Wm61Ud": {
"mQQ6SmeaSwChGv0vKOoz": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"mQQ6SmeaSwChGv0vKOoz": {},
"jTAFsw6InwRfdQcFuYMR": {
"02ISv055Ul30QaTs4xcj": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"02ISv055Ul30QaTs4xcj": {
"jNk8jSFCgXf3nnDEREFT": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"XrHbfTUHXAeHx5O4O6SG": {},
"jNk8jSFCgXf3nnDEREFT": {
"XrHbfTUHXAeHx5O4O6SG": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"daCGsK4hj8v8bKW66HtC": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"daCGsK4hj8v8bKW66HtC": {},
"2S3v37Lk2eKd1IIgEIVy": {
"Ii0uGBhy8aM2XvkoNR1v": {
"type": "next"
},
"etiOIjOmfmk7M9VrHJ1U": {
"type": "input",
"input_type": "value",
"input_name": "val"
}
},
"etiOIjOmfmk7M9VrHJ1U": {},
"DZwGf1xsC3QAvM7yXIur": {},
"bHZCNcaaJydMXKkrV6nZ": {},
"nERqWwytg7AR84cZJEJD": {
"bHZCNcaaJydMXKkrV6nZ": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"DZwGf1xsC3QAvM7yXIur": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"hlwWprgOa1XujiMvRLXG": {
"nERqWwytg7AR84cZJEJD": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"5FnuseoTqa9ya7Wm61Ud": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"tw2SuQYhBvLv5oGeBI14": {
"type": "next"
}
},
"3VCySTXVCiNhGFjHeJrO": {},
"uYgnYh5NweN3FnW4uocq": {},
"8hdXxYsArSZrY2WU9WsL": {},
"hdWAsYdrNL1ZAiEhPLKG": {
"8hdXxYsArSZrY2WU9WsL": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"gLS3w4VJD04kKADCapug": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"gLS3w4VJD04kKADCapug": {
"unvMPSusTuBzAGCYAWyC": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
},
"unvMPSusTuBzAGCYAWyC": {},
"mKKfzmh0DVO8SAkQMfKd": {},
"z1DEuKGnC5wPlEYpE8ID": {
"mKKfzmh0DVO8SAkQMfKd": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"OoFRwESfEPhwfQYgsZqa": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"A7JQ4JiV1rA8vuNpg2eC": {},
"OoFRwESfEPhwfQYgsZqa": {
"A7JQ4JiV1rA8vuNpg2eC": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
}
},
"comments": {}
}
},
{
"id": "835ca8ad-4613-433f-9692-99e474dc1ddd",
"name": "男孩",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 0,
"y": 0,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "5cbcaeea-4967-4392-a885-900aca3ee751",
"costumes": {
"5cbcaeea-4967-4392-a885-900aca3ee751": {
"asset": "assets/5cbcaeea-4967-4392-a885-900aca3ee751.png",
"name": "男孩（1）",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
},
"c1f31e0b-7db9-4d42-99d7-2013665f3e59": {
"asset": "assets/c1f31e0b-7db9-4d42-99d7-2013665f3e59.png",
"name": "女孩（1）",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"zy3kfo0zYlZ6UmmbqWIW": {
"type": "on_running_group_activated",
"id": "zy3kfo0zYlZ6UmmbqWIW",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
147.41087341308594,
-100.32759094238281
]
},
"io1oX9dbmCppJEhPyJe5": {
"type": "repeat_forever",
"id": "io1oX9dbmCppJEhPyJe5",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
570.7442016601562,
163.0057373046875
],
"parent_id": "zy3kfo0zYlZ6UmmbqWIW"
},
"9ZsapdRhzfZ2zIF2ZMAz": {
"type": "self_listen",
"id": "9ZsapdRhzfZ2zIF2ZMAz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"nG5UbyWDQicXJiHRWNTt\" visible=\"visible\"><field name=\"MESSAGE\">隐身</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
266.6666564941406,
424.22198486328125
]
},
"nG5UbyWDQicXJiHRWNTt": {
"type": "broadcast_input",
"id": "nG5UbyWDQicXJiHRWNTt",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐身"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "9ZsapdRhzfZ2zIF2ZMAz"
},
"HFJ08SPuUQcK9vCmaWQB": {
"type": "self_gradually_show_hide",
"id": "HFJ08SPuUQcK9vCmaWQB",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.222196578979492,
298.6664733886719
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ZbF8hlSSsb13uzWeL0sA\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"is_show": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "9ZsapdRhzfZ2zIF2ZMAz"
},
"ZbF8hlSSsb13uzWeL0sA": {
"type": "math_number",
"id": "ZbF8hlSSsb13uzWeL0sA",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.5"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "HFJ08SPuUQcK9vCmaWQB"
},
"VKDBMKIJHVdq0mh6JLdv": {
"type": "show_hide_variable",
"id": "VKDBMKIJHVdq0mh6JLdv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.222196578979492,
413.55328369140625
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "0fda2bab-f040-45cb-ac0e-75a22204a14b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "HFJ08SPuUQcK9vCmaWQB"
},
"IIuAfwns8ynfFD9HNImG": {
"type": "repeat_n_times",
"id": "IIuAfwns8ynfFD9HNImG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.222196578979492,
141.9998016357422
],
"shadows": {
"times": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"SyMoLiXXDM9zX2Oup6uc\" visible=\"visible\"><field constraints=\"1,Infinity,1,\" name=\"NUM\">20</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "VKDBMKIJHVdq0mh6JLdv"
},
"5DyUvceDvb5YlGYIJsTT": {
"type": "math_number",
"id": "5DyUvceDvb5YlGYIJsTT",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "OoA9xnF1QXydZgSf57Ma"
},
"OoA9xnF1QXydZgSf57Ma": {
"type": "wait",
"id": "OoA9xnF1QXydZgSf57Ma",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.222196578979492,
707.9998168945312
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"5DyUvceDvb5YlGYIJsTT\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "IIuAfwns8ynfFD9HNImG"
},
"OhM2hCUH6ieqGobYiKzu": {
"type": "math_number",
"id": "OhM2hCUH6ieqGobYiKzu",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZoInWTfbRvEWMLO9viyc"
},
"ZoInWTfbRvEWMLO9viyc": {
"type": "change_variable",
"id": "ZoInWTfbRvEWMLO9viyc",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.222196578979492,
360.2199401855469
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"OhM2hCUH6ieqGobYiKzu\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"method": "decrease",
"valname": "0fda2bab-f040-45cb-ac0e-75a22204a14b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "OoA9xnF1QXydZgSf57Ma"
},
"SyMoLiXXDM9zX2Oup6uc": {
"type": "math_number",
"id": "SyMoLiXXDM9zX2Oup6uc",
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "10"
},
"field_constraints": {
"NUM": {
"min": 1,
"max": null,
"precision": 1,
"mod": null
}
},
"field_extra_attr": {},
"comment": null,
"mutation": "",
"parent_id": "IIuAfwns8ynfFD9HNImG",
"is_output": null
},
"2UUMJWJEMPZEOGrUwVGm": {
"type": "show_hide_variable",
"id": "2UUMJWJEMPZEOGrUwVGm",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "0fda2bab-f040-45cb-ac0e-75a22204a14b",
"FUNC": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
167.22222900390625,
782.4443969726562
],
"parent_id": "IIuAfwns8ynfFD9HNImG"
},
"RwWZrNH6k4ZDjS7rMFBN": {
"type": "math_number",
"id": "RwWZrNH6k4ZDjS7rMFBN",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.5"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "pP2UlkNC4VPQmEXA4mlT"
},
"pP2UlkNC4VPQmEXA4mlT": {
"type": "self_gradually_show_hide",
"id": "pP2UlkNC4VPQmEXA4mlT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
245,
758
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"RwWZrNH6k4ZDjS7rMFBN\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">0.5</field></shadow>"
},
"fields": {
"is_show": "show"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "4mhdCwsROu8F8WGypqpj"
},
"Vl70719Fgmo3GFwFgT96": {
"type": "math_number",
"id": "Vl70719Fgmo3GFwFgT96",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "10"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "d30LqIZ4bYKmoOCJPEYS"
},
"d30LqIZ4bYKmoOCJPEYS": {
"type": "variables_set",
"id": "d30LqIZ4bYKmoOCJPEYS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Vl70719Fgmo3GFwFgT96\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "0fda2bab-f040-45cb-ac0e-75a22204a14b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
273.33331298828125,
721.3310546875
],
"parent_id": "2UUMJWJEMPZEOGrUwVGm"
},
"4mhdCwsROu8F8WGypqpj": {
"type": "self_broadcast",
"id": "4mhdCwsROu8F8WGypqpj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"LUL2PXNH3CtSMbzuEvcp\" visible=\"visible\"><field name=\"MESSAGE\">隐身</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
272.2221984863281,
763.11083984375
],
"parent_id": "d30LqIZ4bYKmoOCJPEYS"
},
"LUL2PXNH3CtSMbzuEvcp": {
"type": "broadcast_input",
"id": "LUL2PXNH3CtSMbzuEvcp",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐身结束"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4mhdCwsROu8F8WGypqpj"
},
"c0Bv8nsJfGrnpFVADHKA": {
"type": "on_running_group_activated",
"id": "c0Bv8nsJfGrnpFVADHKA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
167.77777099609375,
919.777587890625
]
},
"DqbWiJQskgDG0P413leu": {
"type": "controls_if",
"id": "DqbWiJQskgDG0P413leu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
53.333309173583984,
934.66650390625
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"JriLJcOdQphdHbmmwyy9\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "c0Bv8nsJfGrnpFVADHKA"
},
"VZqBqc2gyYH6Tf33XGMo": {
"type": "variables_get",
"id": "VZqBqc2gyYH6Tf33XGMo",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "b24ee5fd-8089-4bee-b5bb-8dc843f50a04"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
346.6666564941406,
1110.887939453125
],
"parent_id": "sgDyqUBRh2FIyfzJutGc"
},
"agfwZxksDgd6eoVVj1uP": {
"type": "math_number",
"id": "agfwZxksDgd6eoVVj1uP",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "男"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sgDyqUBRh2FIyfzJutGc"
},
"sgDyqUBRh2FIyfzJutGc": {
"type": "logic_compare",
"id": "sgDyqUBRh2FIyfzJutGc",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"cV3yvchDENTlbkktYqR0\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"agfwZxksDgd6eoVVj1uP\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
435.5555419921875,
1053.5552978515625
],
"parent_id": "DqbWiJQskgDG0P413leu"
},
"58fnt1sGTzkWXqUhDDXy": {
"type": "set_costume",
"id": "58fnt1sGTzkWXqUhDDXy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
53.333309173583984,
465.3331604003906
],
"shadows": {
"index": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_costume\" id=\"rHUZKYlFGe2m5OXa4VpO\" visible=\"visible\" inline=\"true\"><field name=\"style_id\">5cbcaeea-4967-4392-a885-900aca3ee751</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DqbWiJQskgDG0P413leu"
},
"rHUZKYlFGe2m5OXa4VpO": {
"type": "get_current_costume",
"id": "rHUZKYlFGe2m5OXa4VpO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"style_id": "5cbcaeea-4967-4392-a885-900aca3ee751"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "58fnt1sGTzkWXqUhDDXy"
},
"W6fmnqltfp1Ei0tSORSt": {
"type": "get_current_costume",
"id": "W6fmnqltfp1Ei0tSORSt",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"style_id": "c1f31e0b-7db9-4d42-99d7-2013665f3e59"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "nuUCvXPOkHNf0v2IapCj"
},
"nuUCvXPOkHNf0v2IapCj": {
"type": "set_costume",
"id": "nuUCvXPOkHNf0v2IapCj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
232,
1104
],
"shadows": {
"index": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_costume\" id=\"W6fmnqltfp1Ei0tSORSt\" visible=\"visible\" inline=\"true\"><field name=\"style_id\">5cbcaeea-4967-4392-a885-900aca3ee751</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DqbWiJQskgDG0P413leu"
},
"2h33wiu27bLyVCHrBc4k": {
"type": "controls_if",
"id": "2h33wiu27bLyVCHrBc4k",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"tPDx3yiVJ5aLO4teRJ0M\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
132.9664306640625,
246.11685180664062
],
"parent_id": "4cSgJ9uNvPZQa6aeZfK9"
},
"4cSgJ9uNvPZQa6aeZfK9": {
"type": "self_move_to",
"id": "4cSgJ9uNvPZQa6aeZfK9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"x": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"5I76THjI6HzoZ9ykuCPI\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">0</field></shadow>",
"y": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"aBfHfcGus8Nb7ros3ZJ9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">0</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
158.2997589111328,
-32.32759094238281
],
"parent_id": "io1oX9dbmCppJEhPyJe5"
},
"DqX09THP8Z0PywgS6C7j": {
"type": "math_number",
"id": "DqX09THP8Z0PywgS6C7j",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "70"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "nQ5bv0uMblqIHSACJsB1"
},
"HHZ3nK84NPMB9CtC47lA": {
"type": "get_mouse_info",
"id": "HHZ3nK84NPMB9CtC47lA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"position": "x"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4cSgJ9uNvPZQa6aeZfK9"
},
"SOw5NaoaHufOjLqBwlJS": {
"type": "bump",
"id": "SOw5NaoaHufOjLqBwlJS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite1": "__self",
"sprite2": "921e60b7-e6d0-45b4-b5d6-614b708bd057"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "2h33wiu27bLyVCHrBc4k"
},
"fmiIHLpqUopQfjRz0QIp": {
"type": "get_mouse_info",
"id": "fmiIHLpqUopQfjRz0QIp",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"position": "y"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "nQ5bv0uMblqIHSACJsB1"
},
"nQ5bv0uMblqIHSACJsB1": {
"type": "math_arithmetic",
"id": "nQ5bv0uMblqIHSACJsB1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"S7ZMFfxASiAxbAyQrxwL\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"DqX09THP8Z0PywgS6C7j\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "ADD"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4cSgJ9uNvPZQa6aeZfK9"
},
"xv9zdTmbuYHyEEqPwYK4": {
"type": "switch_to_screen",
"id": "xv9zdTmbuYHyEEqPwYK4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
179.41087341308594,
157.6724090576172
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"zKpYghjo9ak2A4kIdj2D\" visible=\"visible\" inline=\"true\"><field name=\"scene\">3eed1ea7-5aed-4d48-a039-9d0501f2cdf7</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "2h33wiu27bLyVCHrBc4k"
},
"zKpYghjo9ak2A4kIdj2D": {
"type": "get_current_scene",
"id": "zKpYghjo9ak2A4kIdj2D",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "1c99d815-11ea-400b-8e16-38abe13c15fc"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xv9zdTmbuYHyEEqPwYK4"
},
"YuwA6Fg5gP2U0zwbaEn6": {
"type": "self_listen",
"id": "YuwA6Fg5gP2U0zwbaEn6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"at3BEoV59rdLAB7tDHW2\" visible=\"visible\"><field name=\"MESSAGE\">人物还原</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
316.6666259765625,
212.11065673828125
]
},
"at3BEoV59rdLAB7tDHW2": {
"type": "broadcast_input",
"id": "at3BEoV59rdLAB7tDHW2",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物还原"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YuwA6Fg5gP2U0zwbaEn6"
},
"8254IBih4e9cM3c2XtvA": {
"type": "math_number",
"id": "8254IBih4e9cM3c2XtvA",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rU47KBVs0X6eL4Q03H6J"
},
"rU47KBVs0X6eL4Q03H6J": {
"type": "set_scale",
"id": "rU47KBVs0X6eL4Q03H6J",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
53.333309173583984,
557.888427734375
],
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"8254IBih4e9cM3c2XtvA\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "YuwA6Fg5gP2U0zwbaEn6"
},
"M5UbMNzZvp15SdPpgTKI": {
"type": "broadcast_input",
"id": "M5UbMNzZvp15SdPpgTKI",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物减小"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "jPQm0CVvYcRebB6BNaM2"
},
"jPQm0CVvYcRebB6BNaM2": {
"type": "self_listen",
"id": "jPQm0CVvYcRebB6BNaM2",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
365,
308
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"M5UbMNzZvp15SdPpgTKI\" visible=\"visible\"><field name=\"MESSAGE\">人物还原</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"Fi7p2ITpM73JFl7EQPJI": {
"type": "math_number",
"id": "Fi7p2ITpM73JFl7EQPJI",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "5"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VFI7dMg0ui9029a7Pi0I"
},
"VFI7dMg0ui9029a7Pi0I": {
"type": "self_change_scale_2",
"id": "VFI7dMg0ui9029a7Pi0I",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
53.333309173583984,
611.2218017578125
],
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Fi7p2ITpM73JFl7EQPJI\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10</field></shadow>"
},
"fields": {
"increase": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "jPQm0CVvYcRebB6BNaM2"
},
"2TNqq3gjYxxvfzAcffHS": {
"type": "get_stage_info",
"id": "2TNqq3gjYxxvfzAcffHS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "uBFUTtGqBZt4PMgDljnJ"
},
"2x6Br4yidNISZjSioeM7": {
"type": "get_stage_info",
"id": "2x6Br4yidNISZjSioeM7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "6MAyZVXUF8cQ8KequcSZ"
},
"3N36atLohZ6wkggCcIzm": {
"type": "math_number",
"id": "3N36atLohZ6wkggCcIzm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "6MAyZVXUF8cQ8KequcSZ"
},
"3SzoIdobOKOjxT6vKrKH": {
"type": "math_arithmetic",
"id": "3SzoIdobOKOjxT6vKrKH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"zGRyxH1Ia6AzkghQkSij\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"D0GOEIjxLrLoRwrcMqwG\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "lzxNfjcV3ZZl7Mt9FGnO"
},
"4RpBBgmt2iyBWSSrxLZz": {
"type": "when",
"id": "4RpBBgmt2iyBWSSrxLZz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
764.6759033203125,
958.9998168945312
],
"shadows": {
"condition": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"JRXqmlrV01Kt2VNPzAi4\" visible=\"visible\" editable=\"false\"></empty>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"5bznmi3L5tOaPaCRPSyL": {
"type": "logic_compare",
"id": "5bznmi3L5tOaPaCRPSyL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"YWkJBSVuBVNGoKyxlD7i\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"jhyP3G3vbqm5tKFAgUOP\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "LT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "CsnvvUbS9o1hMERPx6cC"
},
"5haqpHUUuDmDz7mE3nzm": {
"type": "get_3",
"id": "5haqpHUUuDmDz7mE3nzm",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "__self",
"attribute": "1"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AYzJMlIGGs1wU6UcolKH"
},
"6L9eoLOrkrt4zLsCtVxN": {
"type": "math_number",
"id": "6L9eoLOrkrt4zLsCtVxN",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "lzxNfjcV3ZZl7Mt9FGnO"
},
"6MAyZVXUF8cQ8KequcSZ": {
"type": "math_arithmetic",
"id": "6MAyZVXUF8cQ8KequcSZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"xhpw8UAW6Z495FPLSnXw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"3N36atLohZ6wkggCcIzm\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AYzJMlIGGs1wU6UcolKH"
},
"6ZJ5bt5Ux4jQKSwAZxZe": {
"type": "math_number",
"id": "6ZJ5bt5Ux4jQKSwAZxZe",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zZKY3MbQmgfnxmYi3nIi"
},
"6uoPwKMtKtBHG4Ok4m1z": {
"type": "math_arithmetic",
"id": "6uoPwKMtKtBHG4Ok4m1z",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XlhB2c9KczxtQzhmKLMu\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"x2cAKZcnPhc9AYV9TvTB\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zFMjN8Q2Z6YO1HRaPYq6"
},
"74zpa4g7IVaE2vDnHzUa": {
"type": "get_3",
"id": "74zpa4g7IVaE2vDnHzUa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "__self",
"attribute": "1"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "repod38WFtnSQa69DVuH"
},
"9ZAqOjj9D3g7ChKlwBo7": {
"type": "math_arithmetic",
"id": "9ZAqOjj9D3g7ChKlwBo7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"c3hYjJOMlh0DbF38JR9p\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"kgjdxBXC7EPY6O8u23XH\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ASVUp52OBziBVGhGIBi8"
},
"ALTBcdFRiqATNzIC9gLt": {
"type": "get_stage_info",
"id": "ALTBcdFRiqATNzIC9gLt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "6uoPwKMtKtBHG4Ok4m1z"
},
"ASVUp52OBziBVGhGIBi8": {
"type": "math_arithmetic",
"id": "ASVUp52OBziBVGhGIBi8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9FNrquFCK7U56gIptpm4\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"gIPA072aK5VnLPc7N9QT\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "MINUS"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AvvpRuCEs5C2qvvTp1ZS"
},
"AYzJMlIGGs1wU6UcolKH": {
"type": "logic_compare",
"id": "AYzJMlIGGs1wU6UcolKH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"nAmS7nA5xQUmP2bfXDt7\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"A8YHQv5S7wZyPMXqvT0m\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "nxMtYddiOEz44pE7NSL9"
},
"AstPZnAc3X2aO2gKjDjE": {
"type": "math_arithmetic",
"id": "AstPZnAc3X2aO2gKjDjE",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"TzeaMzfII2Lx1hIRSiZ9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"hz8fOCGvQGSeAX3LLmw9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FftXGQfXWCOvtQLSZxQd"
},
"AvvpRuCEs5C2qvvTp1ZS": {
"type": "self_set_position",
"id": "AvvpRuCEs5C2qvvTp1ZS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"3RIY4NRYk2LvBZOqG4f8\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {
"coordinary": "x"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "CsnvvUbS9o1hMERPx6cC"
},
"Cb3pZntzA7OjQB1N8rTm": {
"type": "math_number",
"id": "Cb3pZntzA7OjQB1N8rTm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "DbJ9LsSJh5BuE1fmYwcL"
},
"ClGDuQjaL63jYVjVldoV": {
"type": "self_set_position",
"id": "ClGDuQjaL63jYVjVldoV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"twsf3lEImOzFcwpftgci\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {
"coordinary": "y"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "4RpBBgmt2iyBWSSrxLZz"
},
"CsnvvUbS9o1hMERPx6cC": {
"type": "when",
"id": "CsnvvUbS9o1hMERPx6cC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
764.6759033203125,
1114.9998779296875
],
"shadows": {
"condition": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"19h7quZ9o1rq4jiljW8z\" visible=\"visible\" editable=\"false\"></empty>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"D0GOEIjxLrLoRwrcMqwG": {
"type": "math_number",
"id": "D0GOEIjxLrLoRwrcMqwG",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "3SzoIdobOKOjxT6vKrKH"
},
"DbJ9LsSJh5BuE1fmYwcL": {
"type": "math_arithmetic",
"id": "DbJ9LsSJh5BuE1fmYwcL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"HtcL2hHdHOZTFhhWDfok\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Cb3pZntzA7OjQB1N8rTm\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ASVUp52OBziBVGhGIBi8"
},
"Dmc8cPxdXSgThfK5mrco": {
"type": "math_arithmetic",
"id": "Dmc8cPxdXSgThfK5mrco",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"0yUa1rRZR1ZcyTlRD0Vf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9p0PdNBNJFtlCgKpD0F5\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "MINUS"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "repod38WFtnSQa69DVuH"
},
"EWXFOhobf180BBjPgbvS": {
"type": "math_arithmetic",
"id": "EWXFOhobf180BBjPgbvS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"d8CQu6Y4kejXyvcNri6Y\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"eEGJEst47KkyZz3EPnGe\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "F5XokT3a1F0jnscWnjkl"
},
"F5XokT3a1F0jnscWnjkl": {
"type": "math_arithmetic",
"id": "F5XokT3a1F0jnscWnjkl",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"McMC81MAVDzQTxKVEnNN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"p0lnmd70rd6uDRj9sEFO\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FX4tdjRn1W872IKCfC1E"
},
"FX4tdjRn1W872IKCfC1E": {
"type": "math_arithmetic",
"id": "FX4tdjRn1W872IKCfC1E",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"yFhYSvO7qgXFNhDPvnqL\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"F7cbXlNB0i6uzHZnUF1a\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "MINUS"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ClGDuQjaL63jYVjVldoV"
},
"FftXGQfXWCOvtQLSZxQd": {
"type": "math_arithmetic",
"id": "FftXGQfXWCOvtQLSZxQd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"jJgFyzFlOlDaCpEEDu2U\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"pedj2ck6JpFw1vm7zOFl\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "MINUS"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5bznmi3L5tOaPaCRPSyL"
},
"FlgxeHMPtk7cURaOjjSw": {
"type": "math_number",
"id": "FlgxeHMPtk7cURaOjjSw",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SkyZF3zkbNHflxvGtJwR"
},
"GsdarIZmb5cpp49KGkpb": {
"type": "math_number",
"id": "GsdarIZmb5cpp49KGkpb",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "uBFUTtGqBZt4PMgDljnJ"
},
"K1Dc8CCLIog5bKsHJjYV": {
"type": "get_stage_info",
"id": "K1Dc8CCLIog5bKsHJjYV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "9ZAqOjj9D3g7ChKlwBo7"
},
"MpBBlZIaRuU6xGbYvlIb": {
"type": "get_stage_info",
"id": "MpBBlZIaRuU6xGbYvlIb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EWXFOhobf180BBjPgbvS"
},
"Nlz07pSarCyRBZlE5UYx": {
"type": "get_stage_info",
"id": "Nlz07pSarCyRBZlE5UYx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SivNtVwfwRQ9dit52Gpv"
},
"PBDttsbnBVKYS6HFMgZj": {
"type": "self_set_position",
"id": "PBDttsbnBVKYS6HFMgZj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"CT4ZAjXFoYvo8zmq7BLg\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {
"coordinary": "x"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "rbOjG33s2liY7jd0RyzZ"
},
"QXVH0EM6GbtpAJqXjxO0": {
"type": "math_number",
"id": "QXVH0EM6GbtpAJqXjxO0",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "RiM7VrR0yeYpky5B0is4"
},
"R4sBWWz1o8AQw8IEcLZx": {
"type": "get_3",
"id": "R4sBWWz1o8AQw8IEcLZx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "__self",
"attribute": "0"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5bznmi3L5tOaPaCRPSyL"
},
"RWTKSk7TO7O5EaWsGnAA": {
"type": "get_stage_info",
"id": "RWTKSk7TO7O5EaWsGnAA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AstPZnAc3X2aO2gKjDjE"
},
"RiM7VrR0yeYpky5B0is4": {
"type": "math_arithmetic",
"id": "RiM7VrR0yeYpky5B0is4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ZeqOez7ymJmPWFXyD5jB\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"QXVH0EM6GbtpAJqXjxO0\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FftXGQfXWCOvtQLSZxQd"
},
"S6QJVuRmxi0q2dNFfQmP": {
"type": "logic_compare",
"id": "S6QJVuRmxi0q2dNFfQmP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"M10LhkiOx1EPxhnvWqT7\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"tQJgpXxrNErUK0WJEeIk\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rbOjG33s2liY7jd0RyzZ"
},
"SivNtVwfwRQ9dit52Gpv": {
"type": "math_arithmetic",
"id": "SivNtVwfwRQ9dit52Gpv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"vpCRwpaxQwYwOtzKKBvA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"anFu8hfz8AQxHANUvp3s\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PBDttsbnBVKYS6HFMgZj"
},
"SkyZF3zkbNHflxvGtJwR": {
"type": "math_arithmetic",
"id": "SkyZF3zkbNHflxvGtJwR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"lvZWCPWkK9Eu8xuaS0yw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"FlgxeHMPtk7cURaOjjSw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Dmc8cPxdXSgThfK5mrco"
},
"Z05QoONZAg4RtDetVdjc": {
"type": "math_arithmetic",
"id": "Z05QoONZAg4RtDetVdjc",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Ri2Rg54PDQTWnirYFQ5M\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"s5YZ4DgNr76LYDfG1njy\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FX4tdjRn1W872IKCfC1E"
},
"anFu8hfz8AQxHANUvp3s": {
"type": "math_number",
"id": "anFu8hfz8AQxHANUvp3s",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SivNtVwfwRQ9dit52Gpv"
},
"b8fq4j3HrGeJ19f6EvFH": {
"type": "math_arithmetic",
"id": "b8fq4j3HrGeJ19f6EvFH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Inva5VSeOQLcBBNQPvaq\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"bCrZKvEiLrS7zipOEJQL\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "DbJ9LsSJh5BuE1fmYwcL"
},
"bCrZKvEiLrS7zipOEJQL": {
"type": "math_number",
"id": "bCrZKvEiLrS7zipOEJQL",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "b8fq4j3HrGeJ19f6EvFH"
},
"bRnKQDdqesp4aLiPrAeQ": {
"type": "get_stage_info",
"id": "bRnKQDdqesp4aLiPrAeQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "3SzoIdobOKOjxT6vKrKH"
},
"dbK5oAfLCfe7kLOJsaDD": {
"type": "get_stage_info",
"id": "dbK5oAfLCfe7kLOJsaDD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "b8fq4j3HrGeJ19f6EvFH"
},
"eEGJEst47KkyZz3EPnGe": {
"type": "math_number",
"id": "eEGJEst47KkyZz3EPnGe",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EWXFOhobf180BBjPgbvS"
},
"egvPrWGLm8agv8rwFoAw": {
"type": "get_3",
"id": "egvPrWGLm8agv8rwFoAw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "__self",
"attribute": "0"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "S6QJVuRmxi0q2dNFfQmP"
},
"hz8fOCGvQGSeAX3LLmw9": {
"type": "math_number",
"id": "hz8fOCGvQGSeAX3LLmw9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "AstPZnAc3X2aO2gKjDjE"
},
"jUJ9BMwiwpOXFQmgfcFv": {
"type": "get_stage_info",
"id": "jUJ9BMwiwpOXFQmgfcFv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Z05QoONZAg4RtDetVdjc"
},
"kgjdxBXC7EPY6O8u23XH": {
"type": "math_number",
"id": "kgjdxBXC7EPY6O8u23XH",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "9ZAqOjj9D3g7ChKlwBo7"
},
"lzxNfjcV3ZZl7Mt9FGnO": {
"type": "math_arithmetic",
"id": "lzxNfjcV3ZZl7Mt9FGnO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"kwIZ96nmNBdJqMV8nDjG\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"6L9eoLOrkrt4zLsCtVxN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Dmc8cPxdXSgThfK5mrco"
},
"nxMtYddiOEz44pE7NSL9": {
"type": "when",
"id": "nxMtYddiOEz44pE7NSL9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
764.6759033203125,
818.9998168945312
],
"shadows": {
"condition": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"cWWdoY6UZrhsY12jJL1D\" visible=\"visible\" editable=\"false\"></empty>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"p0lnmd70rd6uDRj9sEFO": {
"type": "math_number",
"id": "p0lnmd70rd6uDRj9sEFO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "F5XokT3a1F0jnscWnjkl"
},
"rbOjG33s2liY7jd0RyzZ": {
"type": "when",
"id": "rbOjG33s2liY7jd0RyzZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
764.6759033203125,
678.9998168945312
],
"shadows": {
"condition": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"Aa86ZOylZ7ljdi0o7JXx\" visible=\"visible\" editable=\"false\"></empty>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"repod38WFtnSQa69DVuH": {
"type": "logic_compare",
"id": "repod38WFtnSQa69DVuH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"UtX34OP6P2yE5gxNaXO2\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"x9FVWR3K584uTpTZeTg8\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "LT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4RpBBgmt2iyBWSSrxLZz"
},
"s5YZ4DgNr76LYDfG1njy": {
"type": "math_number",
"id": "s5YZ4DgNr76LYDfG1njy",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Z05QoONZAg4RtDetVdjc"
},
"tFhirsVeULz9mn48IAyI": {
"type": "get_stage_info",
"id": "tFhirsVeULz9mn48IAyI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "width"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zZKY3MbQmgfnxmYi3nIi"
},
"uBFUTtGqBZt4PMgDljnJ": {
"type": "math_arithmetic",
"id": "uBFUTtGqBZt4PMgDljnJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"eTFpFqbfK7296fRE20FQ\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"GsdarIZmb5cpp49KGkpb\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "S6QJVuRmxi0q2dNFfQmP"
},
"x2cAKZcnPhc9AYV9TvTB": {
"type": "math_number",
"id": "x2cAKZcnPhc9AYV9TvTB",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "6uoPwKMtKtBHG4Ok4m1z"
},
"x5vzU33YumXF4tVlj2nz": {
"type": "get_stage_info",
"id": "x5vzU33YumXF4tVlj2nz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"info": "height"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SkyZF3zkbNHflxvGtJwR"
},
"zFMjN8Q2Z6YO1HRaPYq6": {
"type": "self_set_position",
"id": "zFMjN8Q2Z6YO1HRaPYq6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"value": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"rERhyvJTj3e5w2Pgmar5\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {
"coordinary": "y"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "nxMtYddiOEz44pE7NSL9"
},
"zZKY3MbQmgfnxmYi3nIi": {
"type": "math_arithmetic",
"id": "zZKY3MbQmgfnxmYi3nIi",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"B37imDf8u7armgBGMdEY\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"6ZJ5bt5Ux4jQKSwAZxZe\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">2</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "RiM7VrR0yeYpky5B0is4"
}
},
"connections": {
"zy3kfo0zYlZ6UmmbqWIW": {
"io1oX9dbmCppJEhPyJe5": {
"type": "next"
}
},
"io1oX9dbmCppJEhPyJe5": {
"4cSgJ9uNvPZQa6aeZfK9": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"9ZsapdRhzfZ2zIF2ZMAz": {
"nG5UbyWDQicXJiHRWNTt": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"HFJ08SPuUQcK9vCmaWQB": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"nG5UbyWDQicXJiHRWNTt": {},
"HFJ08SPuUQcK9vCmaWQB": {
"ZbF8hlSSsb13uzWeL0sA": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"VKDBMKIJHVdq0mh6JLdv": {
"type": "next"
}
},
"ZbF8hlSSsb13uzWeL0sA": {},
"VKDBMKIJHVdq0mh6JLdv": {
"IIuAfwns8ynfFD9HNImG": {
"type": "next"
}
},
"IIuAfwns8ynfFD9HNImG": {
"OoA9xnF1QXydZgSf57Ma": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"SyMoLiXXDM9zX2Oup6uc": {
"type": "input",
"input_type": "value",
"input_name": "times"
},
"2UUMJWJEMPZEOGrUwVGm": {
"type": "next"
}
},
"5DyUvceDvb5YlGYIJsTT": {},
"OoA9xnF1QXydZgSf57Ma": {
"5DyUvceDvb5YlGYIJsTT": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"ZoInWTfbRvEWMLO9viyc": {
"type": "next"
}
},
"OhM2hCUH6ieqGobYiKzu": {},
"ZoInWTfbRvEWMLO9viyc": {
"OhM2hCUH6ieqGobYiKzu": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"SyMoLiXXDM9zX2Oup6uc": {},
"2UUMJWJEMPZEOGrUwVGm": {
"d30LqIZ4bYKmoOCJPEYS": {
"type": "next"
}
},
"RwWZrNH6k4ZDjS7rMFBN": {},
"pP2UlkNC4VPQmEXA4mlT": {
"RwWZrNH6k4ZDjS7rMFBN": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"Vl70719Fgmo3GFwFgT96": {},
"d30LqIZ4bYKmoOCJPEYS": {
"Vl70719Fgmo3GFwFgT96": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"4mhdCwsROu8F8WGypqpj": {
"type": "next"
}
},
"4mhdCwsROu8F8WGypqpj": {
"LUL2PXNH3CtSMbzuEvcp": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"pP2UlkNC4VPQmEXA4mlT": {
"type": "next"
}
},
"LUL2PXNH3CtSMbzuEvcp": {},
"c0Bv8nsJfGrnpFVADHKA": {
"DqbWiJQskgDG0P413leu": {
"type": "next"
}
},
"DqbWiJQskgDG0P413leu": {
"sgDyqUBRh2FIyfzJutGc": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"58fnt1sGTzkWXqUhDDXy": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"nuUCvXPOkHNf0v2IapCj": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"VZqBqc2gyYH6Tf33XGMo": {},
"agfwZxksDgd6eoVVj1uP": {},
"sgDyqUBRh2FIyfzJutGc": {
"agfwZxksDgd6eoVVj1uP": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"VZqBqc2gyYH6Tf33XGMo": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"58fnt1sGTzkWXqUhDDXy": {
"rHUZKYlFGe2m5OXa4VpO": {
"type": "input",
"input_type": "value",
"input_name": "index"
}
},
"rHUZKYlFGe2m5OXa4VpO": {},
"W6fmnqltfp1Ei0tSORSt": {},
"nuUCvXPOkHNf0v2IapCj": {
"W6fmnqltfp1Ei0tSORSt": {
"type": "input",
"input_type": "value",
"input_name": "index"
}
},
"2h33wiu27bLyVCHrBc4k": {
"SOw5NaoaHufOjLqBwlJS": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"xv9zdTmbuYHyEEqPwYK4": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"4cSgJ9uNvPZQa6aeZfK9": {
"HHZ3nK84NPMB9CtC47lA": {
"type": "input",
"input_type": "value",
"input_name": "x"
},
"nQ5bv0uMblqIHSACJsB1": {
"type": "input",
"input_type": "value",
"input_name": "y"
},
"2h33wiu27bLyVCHrBc4k": {
"type": "next"
}
},
"DqX09THP8Z0PywgS6C7j": {},
"HHZ3nK84NPMB9CtC47lA": {},
"SOw5NaoaHufOjLqBwlJS": {},
"fmiIHLpqUopQfjRz0QIp": {},
"nQ5bv0uMblqIHSACJsB1": {
"DqX09THP8Z0PywgS6C7j": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"fmiIHLpqUopQfjRz0QIp": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"xv9zdTmbuYHyEEqPwYK4": {
"zKpYghjo9ak2A4kIdj2D": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"zKpYghjo9ak2A4kIdj2D": {},
"YuwA6Fg5gP2U0zwbaEn6": {
"at3BEoV59rdLAB7tDHW2": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"rU47KBVs0X6eL4Q03H6J": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"at3BEoV59rdLAB7tDHW2": {},
"8254IBih4e9cM3c2XtvA": {},
"rU47KBVs0X6eL4Q03H6J": {
"8254IBih4e9cM3c2XtvA": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
},
"M5UbMNzZvp15SdPpgTKI": {},
"jPQm0CVvYcRebB6BNaM2": {
"M5UbMNzZvp15SdPpgTKI": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"VFI7dMg0ui9029a7Pi0I": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"Fi7p2ITpM73JFl7EQPJI": {},
"VFI7dMg0ui9029a7Pi0I": {
"Fi7p2ITpM73JFl7EQPJI": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
},
"2TNqq3gjYxxvfzAcffHS": {},
"2x6Br4yidNISZjSioeM7": {},
"3N36atLohZ6wkggCcIzm": {},
"3SzoIdobOKOjxT6vKrKH": {
"D0GOEIjxLrLoRwrcMqwG": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"bRnKQDdqesp4aLiPrAeQ": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"4RpBBgmt2iyBWSSrxLZz": {
"ClGDuQjaL63jYVjVldoV": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"repod38WFtnSQa69DVuH": {
"type": "input",
"input_type": "value",
"input_name": "condition"
}
},
"5bznmi3L5tOaPaCRPSyL": {
"FftXGQfXWCOvtQLSZxQd": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"R4sBWWz1o8AQw8IEcLZx": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"5haqpHUUuDmDz7mE3nzm": {},
"6L9eoLOrkrt4zLsCtVxN": {},
"6MAyZVXUF8cQ8KequcSZ": {
"2x6Br4yidNISZjSioeM7": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"3N36atLohZ6wkggCcIzm": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"6ZJ5bt5Ux4jQKSwAZxZe": {},
"6uoPwKMtKtBHG4Ok4m1z": {
"ALTBcdFRiqATNzIC9gLt": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"x2cAKZcnPhc9AYV9TvTB": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"74zpa4g7IVaE2vDnHzUa": {},
"9ZAqOjj9D3g7ChKlwBo7": {
"K1Dc8CCLIog5bKsHJjYV": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"kgjdxBXC7EPY6O8u23XH": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"ALTBcdFRiqATNzIC9gLt": {},
"ASVUp52OBziBVGhGIBi8": {
"9ZAqOjj9D3g7ChKlwBo7": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"DbJ9LsSJh5BuE1fmYwcL": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"AYzJMlIGGs1wU6UcolKH": {
"5haqpHUUuDmDz7mE3nzm": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"6MAyZVXUF8cQ8KequcSZ": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"AstPZnAc3X2aO2gKjDjE": {
"RWTKSk7TO7O5EaWsGnAA": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"hz8fOCGvQGSeAX3LLmw9": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"AvvpRuCEs5C2qvvTp1ZS": {
"ASVUp52OBziBVGhGIBi8": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"Cb3pZntzA7OjQB1N8rTm": {},
"ClGDuQjaL63jYVjVldoV": {
"FX4tdjRn1W872IKCfC1E": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"CsnvvUbS9o1hMERPx6cC": {
"5bznmi3L5tOaPaCRPSyL": {
"type": "input",
"input_type": "value",
"input_name": "condition"
},
"AvvpRuCEs5C2qvvTp1ZS": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"D0GOEIjxLrLoRwrcMqwG": {},
"DbJ9LsSJh5BuE1fmYwcL": {
"Cb3pZntzA7OjQB1N8rTm": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"b8fq4j3HrGeJ19f6EvFH": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"Dmc8cPxdXSgThfK5mrco": {
"SkyZF3zkbNHflxvGtJwR": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"lzxNfjcV3ZZl7Mt9FGnO": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"EWXFOhobf180BBjPgbvS": {
"MpBBlZIaRuU6xGbYvlIb": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"eEGJEst47KkyZz3EPnGe": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"F5XokT3a1F0jnscWnjkl": {
"EWXFOhobf180BBjPgbvS": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"p0lnmd70rd6uDRj9sEFO": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"FX4tdjRn1W872IKCfC1E": {
"F5XokT3a1F0jnscWnjkl": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"Z05QoONZAg4RtDetVdjc": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"FftXGQfXWCOvtQLSZxQd": {
"AstPZnAc3X2aO2gKjDjE": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"RiM7VrR0yeYpky5B0is4": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"FlgxeHMPtk7cURaOjjSw": {},
"GsdarIZmb5cpp49KGkpb": {},
"K1Dc8CCLIog5bKsHJjYV": {},
"MpBBlZIaRuU6xGbYvlIb": {},
"Nlz07pSarCyRBZlE5UYx": {},
"PBDttsbnBVKYS6HFMgZj": {
"SivNtVwfwRQ9dit52Gpv": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"QXVH0EM6GbtpAJqXjxO0": {},
"R4sBWWz1o8AQw8IEcLZx": {},
"RWTKSk7TO7O5EaWsGnAA": {},
"RiM7VrR0yeYpky5B0is4": {
"QXVH0EM6GbtpAJqXjxO0": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"zZKY3MbQmgfnxmYi3nIi": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"S6QJVuRmxi0q2dNFfQmP": {
"egvPrWGLm8agv8rwFoAw": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"uBFUTtGqBZt4PMgDljnJ": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"SivNtVwfwRQ9dit52Gpv": {
"Nlz07pSarCyRBZlE5UYx": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"anFu8hfz8AQxHANUvp3s": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"SkyZF3zkbNHflxvGtJwR": {
"FlgxeHMPtk7cURaOjjSw": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"x5vzU33YumXF4tVlj2nz": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"Z05QoONZAg4RtDetVdjc": {
"jUJ9BMwiwpOXFQmgfcFv": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"s5YZ4DgNr76LYDfG1njy": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"anFu8hfz8AQxHANUvp3s": {},
"b8fq4j3HrGeJ19f6EvFH": {
"bCrZKvEiLrS7zipOEJQL": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"dbK5oAfLCfe7kLOJsaDD": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"bCrZKvEiLrS7zipOEJQL": {},
"bRnKQDdqesp4aLiPrAeQ": {},
"dbK5oAfLCfe7kLOJsaDD": {},
"eEGJEst47KkyZz3EPnGe": {},
"egvPrWGLm8agv8rwFoAw": {},
"hz8fOCGvQGSeAX3LLmw9": {},
"jUJ9BMwiwpOXFQmgfcFv": {},
"kgjdxBXC7EPY6O8u23XH": {},
"lzxNfjcV3ZZl7Mt9FGnO": {
"3SzoIdobOKOjxT6vKrKH": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"6L9eoLOrkrt4zLsCtVxN": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"nxMtYddiOEz44pE7NSL9": {
"AYzJMlIGGs1wU6UcolKH": {
"type": "input",
"input_type": "value",
"input_name": "condition"
},
"zFMjN8Q2Z6YO1HRaPYq6": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"p0lnmd70rd6uDRj9sEFO": {},
"rbOjG33s2liY7jd0RyzZ": {
"PBDttsbnBVKYS6HFMgZj": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"S6QJVuRmxi0q2dNFfQmP": {
"type": "input",
"input_type": "value",
"input_name": "condition"
}
},
"repod38WFtnSQa69DVuH": {
"74zpa4g7IVaE2vDnHzUa": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"Dmc8cPxdXSgThfK5mrco": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"s5YZ4DgNr76LYDfG1njy": {},
"tFhirsVeULz9mn48IAyI": {},
"uBFUTtGqBZt4PMgDljnJ": {
"2TNqq3gjYxxvfzAcffHS": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"GsdarIZmb5cpp49KGkpb": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"x2cAKZcnPhc9AYV9TvTB": {},
"x5vzU33YumXF4tVlj2nz": {},
"zFMjN8Q2Z6YO1HRaPYq6": {
"6uoPwKMtKtBHG4Ok4m1z": {
"type": "input",
"input_type": "value",
"input_name": "value"
}
},
"zZKY3MbQmgfnxmYi3nIi": {
"6ZJ5bt5Ux4jQKSwAZxZe": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"tFhirsVeULz9mn48IAyI": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
}
},
"comments": {}
}
},
{
"id": "4182bc93-019c-4b7f-8ee6-b8763eb8cebb",
"name": "新角色(3)",
"scene": "1c99d815-11ea-400b-8e16-38abe13c15fc",
"x": 27.868035215849602,
"y": 299.24750350440024,
"scale": 72.60394162601335,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "15532777-9e75-4ee7-ab8a-4a69de8817fd",
"costumes": {
"15532777-9e75-4ee7-ab8a-4a69de8817fd": {
"asset": "assets/15532777-9e75-4ee7-ab8a-4a69de8817fd.svg",
"name": "新角色(3)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"5vdMCuS1yHc53CSmTR1R": {
"type": "change_cloud_variable",
"id": "5vdMCuS1yHc53CSmTR1R",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"xtwU86acO451yIElvi2R\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "TAigyLsGoMHKzNVBaWbi"
},
"C895OoVOMcRzkmMWBXEo": {
"type": "get_answer",
"id": "C895OoVOMcRzkmMWBXEo",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5vdMCuS1yHc53CSmTR1R"
},
"LkpYguT0eS8LCUXuDny5": {
"type": "user_id_get",
"id": "LkpYguT0eS8LCUXuDny5",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "gQxrkTrycs19A1XVOWgb"
},
"TAigyLsGoMHKzNVBaWbi": {
"type": "self_ask",
"id": "TAigyLsGoMHKzNVBaWbi",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"oELqxVPh3BllD1oUwhBW\" visible=\"visible\"><field name=\"TEXT\">请输入开发者模式要多少个金币：</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "u1wHC0N9z7mgycYlOlOF"
},
"gQxrkTrycs19A1XVOWgb": {
"type": "logic_compare",
"id": "gQxrkTrycs19A1XVOWgb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"F3mjDJcPs6q9wk4e9xHH\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"rl7R3YuoCwfe4GeAptUI\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">539843282</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "u1wHC0N9z7mgycYlOlOF"
},
"oELqxVPh3BllD1oUwhBW": {
"type": "text",
"id": "oELqxVPh3BllD1oUwhBW",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "TAigyLsGoMHKzNVBaWbi"
},
"rl7R3YuoCwfe4GeAptUI": {
"type": "math_number",
"id": "rl7R3YuoCwfe4GeAptUI",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "gQxrkTrycs19A1XVOWgb"
},
"soON6mNqd2p31qQjwX4v": {
"type": "on_keydown",
"id": "soON6mNqd2p31qQjwX4v",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
95.83332824707031,
251.11109924316406
],
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"u1wHC0N9z7mgycYlOlOF": {
"type": "controls_if",
"id": "u1wHC0N9z7mgycYlOlOF",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"pbaGv6W0PtHac0h2KTgq\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "soON6mNqd2p31qQjwX4v"
}
},
"connections": {
"5vdMCuS1yHc53CSmTR1R": {
"C895OoVOMcRzkmMWBXEo": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"C895OoVOMcRzkmMWBXEo": {},
"LkpYguT0eS8LCUXuDny5": {},
"TAigyLsGoMHKzNVBaWbi": {
"5vdMCuS1yHc53CSmTR1R": {
"type": "next"
},
"oELqxVPh3BllD1oUwhBW": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"gQxrkTrycs19A1XVOWgb": {
"LkpYguT0eS8LCUXuDny5": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"rl7R3YuoCwfe4GeAptUI": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"oELqxVPh3BllD1oUwhBW": {},
"rl7R3YuoCwfe4GeAptUI": {},
"soON6mNqd2p31qQjwX4v": {
"u1wHC0N9z7mgycYlOlOF": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"u1wHC0N9z7mgycYlOlOF": {
"TAigyLsGoMHKzNVBaWbi": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"gQxrkTrycs19A1XVOWgb": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
}
},
"comments": {}
}
},
{
"id": "4f8af328-0e36-4883-a935-ebac6c6af761",
"name": "空白按钮(1)",
"scene": "1c99d815-11ea-400b-8e16-38abe13c15fc",
"x": 3.693643422698642,
"y": -109.91473455807045,
"scale": 112.54756792252296,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "ba83dc75-1c42-4fa1-b347-362398c49e00",
"costumes": {
"ba83dc75-1c42-4fa1-b347-362398c49e00": {
"asset": "assets/ba83dc75-1c42-4fa1-b347-362398c49e00.svg",
"name": "空白按钮（3）",
"pivot": {
"x": 2.1230371831152866,
"y": 8.37009247671
},
"rotateCenter": {
"x": 2.1230371831152866,
"y": 8.37009247671
}
}
},
"scripts": {
"blocks": {
"EjhVG4ir71trwVxeMPiz": {
"type": "sprite_on_tap",
"id": "EjhVG4ir71trwVxeMPiz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
231.11111450195312,
378.66644287109375
]
},
"7SKthc6bbMo8tr9GZCSS": {
"type": "get_current_scene",
"id": "7SKthc6bbMo8tr9GZCSS",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qHLm2qhWGoWJ4NsgW39y"
},
"qHLm2qhWGoWJ4NsgW39y": {
"type": "switch_to_screen",
"id": "qHLm2qhWGoWJ4NsgW39y",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
97.55536651611328
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"7SKthc6bbMo8tr9GZCSS\" visible=\"visible\" inline=\"true\"><field name=\"scene\">1c99d815-11ea-400b-8e16-38abe13c15fc</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "EjhVG4ir71trwVxeMPiz"
},
"HrlkWwyE46CNkD3DF7bj": {
"type": "switch_to_screen",
"id": "HrlkWwyE46CNkD3DF7bj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"dMqgaG7kYaimYjflwSkn\" visible=\"visible\" inline=\"true\"><field name=\"scene\">3eed1ea7-5aed-4d48-a039-9d0501f2cdf7</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
271.22222900390625,
655
],
"parent_id": "5ZLtHS2jVsKqVOctFXBs"
},
"dMqgaG7kYaimYjflwSkn": {
"type": "get_current_scene",
"id": "dMqgaG7kYaimYjflwSkn",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "HrlkWwyE46CNkD3DF7bj"
},
"5ZLtHS2jVsKqVOctFXBs": {
"type": "on_keydown",
"id": "5ZLtHS2jVsKqVOctFXBs",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "32"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
287.77777099609375,
597.5553588867188
]
},
"7c9tahqNo6A4ZlvziVal": {
"type": "get_current_scene",
"id": "7c9tahqNo6A4ZlvziVal",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "hrForUvibgast57qicdQ"
},
"U0aYTPSxvAGgflzROfGK": {
"type": "sprite_on_tap",
"id": "U0aYTPSxvAGgflzROfGK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
279,
475
],
"shadows": {
"DO": ""
},
"fields": {
"type": "mouse_click",
"actor": "__scene"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"hrForUvibgast57qicdQ": {
"type": "switch_to_screen",
"id": "hrForUvibgast57qicdQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"7c9tahqNo6A4ZlvziVal\" visible=\"visible\" inline=\"true\"><field name=\"scene\">3eed1ea7-5aed-4d48-a039-9d0501f2cdf7</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "U0aYTPSxvAGgflzROfGK"
},
"E33HZoQ0JuC8ERmXkOYE": {
"type": "switch_to_screen",
"id": "E33HZoQ0JuC8ERmXkOYE",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"X4CIUDYf4Ko1vhk0prkh\" visible=\"visible\" inline=\"true\"><field name=\"scene\">3eed1ea7-5aed-4d48-a039-9d0501f2cdf7</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "FA4ZuBxb87cqg0l8qnw6"
},
"FA4ZuBxb87cqg0l8qnw6": {
"type": "sprite_on_tap",
"id": "FA4ZuBxb87cqg0l8qnw6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
606.8981323242188,
405.5555725097656
],
"shadows": {
"DO": ""
},
"fields": {
"type": "mouse_click",
"actor": "4182bc93-019c-4b7f-8ee6-b8763eb8cebb"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"X4CIUDYf4Ko1vhk0prkh": {
"type": "get_current_scene",
"id": "X4CIUDYf4Ko1vhk0prkh",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "E33HZoQ0JuC8ERmXkOYE"
}
},
"connections": {
"EjhVG4ir71trwVxeMPiz": {
"qHLm2qhWGoWJ4NsgW39y": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"7SKthc6bbMo8tr9GZCSS": {},
"qHLm2qhWGoWJ4NsgW39y": {
"7SKthc6bbMo8tr9GZCSS": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"HrlkWwyE46CNkD3DF7bj": {
"dMqgaG7kYaimYjflwSkn": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"dMqgaG7kYaimYjflwSkn": {},
"5ZLtHS2jVsKqVOctFXBs": {
"HrlkWwyE46CNkD3DF7bj": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"7c9tahqNo6A4ZlvziVal": {},
"U0aYTPSxvAGgflzROfGK": {
"hrForUvibgast57qicdQ": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"hrForUvibgast57qicdQ": {
"7c9tahqNo6A4ZlvziVal": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"E33HZoQ0JuC8ERmXkOYE": {
"X4CIUDYf4Ko1vhk0prkh": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"FA4ZuBxb87cqg0l8qnw6": {
"E33HZoQ0JuC8ERmXkOYE": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"X4CIUDYf4Ko1vhk0prkh": {}
},
"comments": {}
}
},
{
"id": "dd85756a-94f4-4fd2-988f-0555ddad5073",
"name": "新角色(4)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": 350,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "0a41d49a-4fb2-4a8f-b441-c93c3e07c006",
"costumes": {
"0a41d49a-4fb2-4a8f-b441-c93c3e07c006": {
"asset": "assets/0a41d49a-4fb2-4a8f-b441-c93c3e07c006.svg",
"name": "新角色(4)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "52686f48-3e46-42f0-b9d4-c8937f9ad105",
"name": "数字1",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": 285.0828476373659,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "dba0b946-015a-4111-9a45-d702553aeb36",
"costumes": {
"dba0b946-015a-4111-9a45-d702553aeb36": {
"asset": "assets/dba0b946-015a-4111-9a45-d702553aeb36.png",
"name": "数字1",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"ijaMDiGBM0neZqBCkQqz": {
"type": "sprite_on_tap",
"id": "ijaMDiGBM0neZqBCkQqz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
101.1111068725586,
203.11090087890625
]
},
"V3wVuweUN8y1unJFXpux": {
"type": "stop_audio_2",
"id": "V3wVuweUN8y1unJFXpux",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
516.4423828125
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"VW9hvHuHlMxX6emZad8K\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ijaMDiGBM0neZqBCkQqz"
},
"VW9hvHuHlMxX6emZad8K": {
"type": "get_whole_audios",
"id": "VW9hvHuHlMxX6emZad8K",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "all"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "V3wVuweUN8y1unJFXpux"
},
"4DoH9Nij4XfYRIret8W7": {
"type": "get_audios",
"id": "4DoH9Nij4XfYRIret8W7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "b815cb80-1674-4d3c-8b6e-43bdd59391d8"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "T0o9nTiuQthtKDaKZbH6"
},
"T0o9nTiuQthtKDaKZbH6": {
"type": "play_audio_2",
"id": "T0o9nTiuQthtKDaKZbH6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
229.77572631835938
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"4DoH9Nij4XfYRIret8W7\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "V3wVuweUN8y1unJFXpux"
}
},
"connections": {
"ijaMDiGBM0neZqBCkQqz": {
"V3wVuweUN8y1unJFXpux": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"V3wVuweUN8y1unJFXpux": {
"VW9hvHuHlMxX6emZad8K": {
"type": "input",
"input_type": "value",
"input_name": "audio"
},
"T0o9nTiuQthtKDaKZbH6": {
"type": "next"
}
},
"VW9hvHuHlMxX6emZad8K": {},
"4DoH9Nij4XfYRIret8W7": {},
"T0o9nTiuQthtKDaKZbH6": {
"4DoH9Nij4XfYRIret8W7": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
}
},
"comments": {}
}
},
{
"id": "9f8b6eed-b962-4261-aef8-706546b4a720",
"name": "数字2",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -170,
"y": 285,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "41a42dae-f76c-4ce7-9081-a41789413718",
"costumes": {
"41a42dae-f76c-4ce7-9081-a41789413718": {
"asset": "assets/41a42dae-f76c-4ce7-9081-a41789413718.png",
"name": "数字2",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"A7TFwoiYlwJevKafphYh": {
"type": "sprite_on_tap",
"id": "A7TFwoiYlwJevKafphYh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
98.88888549804688,
205.3331298828125
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"S1Hc6S05XyvhYYczXqjk": {
"type": "stop_audio_2",
"id": "S1Hc6S05XyvhYYczXqjk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"fS1k8sokzCq86o2kXYu9\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "A7TFwoiYlwJevKafphYh"
},
"dKl4MoGTQW3WZ78MYCbY": {
"type": "play_audio_2",
"id": "dKl4MoGTQW3WZ78MYCbY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"uFXoy4UcgfD993uZokSh\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "S1Hc6S05XyvhYYczXqjk"
},
"fS1k8sokzCq86o2kXYu9": {
"type": "get_whole_audios",
"id": "fS1k8sokzCq86o2kXYu9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "all"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "S1Hc6S05XyvhYYczXqjk"
},
"uFXoy4UcgfD993uZokSh": {
"type": "get_audios",
"id": "uFXoy4UcgfD993uZokSh",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "aa016577-e9e5-45bf-9b3d-2c06a9cc6e1f"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "dKl4MoGTQW3WZ78MYCbY"
}
},
"connections": {
"A7TFwoiYlwJevKafphYh": {
"S1Hc6S05XyvhYYczXqjk": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"S1Hc6S05XyvhYYczXqjk": {
"dKl4MoGTQW3WZ78MYCbY": {
"type": "next"
},
"fS1k8sokzCq86o2kXYu9": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"dKl4MoGTQW3WZ78MYCbY": {
"uFXoy4UcgfD993uZokSh": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"fS1k8sokzCq86o2kXYu9": {},
"uFXoy4UcgfD993uZokSh": {}
},
"comments": {}
}
},
{
"id": "bed47ce1-8669-4343-a211-a86fd62eaf84",
"name": "数字3",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -80,
"y": 285,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "47e1a9ad-ccec-4bb5-b59f-9e46f4d9498d",
"costumes": {
"47e1a9ad-ccec-4bb5-b59f-9e46f4d9498d": {
"asset": "assets/47e1a9ad-ccec-4bb5-b59f-9e46f4d9498d.png",
"name": "数字3",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"4rmyLnITm8tFJWECOdUi": {
"type": "stop_audio_2",
"id": "4rmyLnITm8tFJWECOdUi",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"shsVe0cI8sVHgR7hxIH8\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "7lIcFoXXes8madv31wgP"
},
"7lIcFoXXes8madv31wgP": {
"type": "sprite_on_tap",
"id": "7lIcFoXXes8madv31wgP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
92.22222137451172,
201.9998016357422
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"SYqZnzRLq1Ayo0GK4rp6": {
"type": "play_audio_2",
"id": "SYqZnzRLq1Ayo0GK4rp6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"nrXlliwK40jNx4dxO4B7\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "4rmyLnITm8tFJWECOdUi"
},
"nrXlliwK40jNx4dxO4B7": {
"type": "get_audios",
"id": "nrXlliwK40jNx4dxO4B7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "8dd86b91-3446-4420-8c7d-54df30d64cf1"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SYqZnzRLq1Ayo0GK4rp6"
},
"shsVe0cI8sVHgR7hxIH8": {
"type": "get_whole_audios",
"id": "shsVe0cI8sVHgR7hxIH8",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "all"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4rmyLnITm8tFJWECOdUi"
}
},
"connections": {
"4rmyLnITm8tFJWECOdUi": {
"SYqZnzRLq1Ayo0GK4rp6": {
"type": "next"
},
"shsVe0cI8sVHgR7hxIH8": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"7lIcFoXXes8madv31wgP": {
"4rmyLnITm8tFJWECOdUi": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"SYqZnzRLq1Ayo0GK4rp6": {
"nrXlliwK40jNx4dxO4B7": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"nrXlliwK40jNx4dxO4B7": {},
"shsVe0cI8sVHgR7hxIH8": {}
},
"comments": {}
}
},
{
"id": "96c2e193-db55-4f5c-b7e4-31ae77c4077c",
"name": "数字4",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": 10,
"y": 285,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "6923df33-9f4e-4f79-8951-df5476a662da",
"costumes": {
"6923df33-9f4e-4f79-8951-df5476a662da": {
"asset": "assets/6923df33-9f4e-4f79-8951-df5476a662da.png",
"name": "数字4",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"afhCq6VTk30eyM2Spd4y": {
"type": "play_audio_2",
"id": "afhCq6VTk30eyM2Spd4y",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"lxKbevic17A3jpCTRQBo\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">a8dbacdc-e6e4-42a7-ad35-bc5c6e9a5122</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "yMcZZQJfnvupBlHisQhz"
},
"gqoSE8nYB8A4oOaKkHzn": {
"type": "sprite_on_tap",
"id": "gqoSE8nYB8A4oOaKkHzn",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
139.09463500976562,
199.489501953125
]
},
"lxKbevic17A3jpCTRQBo": {
"type": "get_audios",
"id": "lxKbevic17A3jpCTRQBo",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "54fe442e-17c9-4de5-8797-a7eb2d624bf2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "afhCq6VTk30eyM2Spd4y"
},
"wIeXzIgkywwc9jBo5D9t": {
"type": "get_whole_audios",
"id": "wIeXzIgkywwc9jBo5D9t",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "all"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "yMcZZQJfnvupBlHisQhz"
},
"yMcZZQJfnvupBlHisQhz": {
"type": "stop_audio_2",
"id": "yMcZZQJfnvupBlHisQhz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"wIeXzIgkywwc9jBo5D9t\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "gqoSE8nYB8A4oOaKkHzn"
}
},
"connections": {
"afhCq6VTk30eyM2Spd4y": {
"lxKbevic17A3jpCTRQBo": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"gqoSE8nYB8A4oOaKkHzn": {
"yMcZZQJfnvupBlHisQhz": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"lxKbevic17A3jpCTRQBo": {},
"wIeXzIgkywwc9jBo5D9t": {},
"yMcZZQJfnvupBlHisQhz": {
"afhCq6VTk30eyM2Spd4y": {
"type": "next"
},
"wIeXzIgkywwc9jBo5D9t": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
}
},
"comments": {}
}
},
{
"id": "dd48bac3-defe-49e3-bd64-4b7c01ab7ac3",
"name": "数字5",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": 100,
"y": 285.99999999999994,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "1f637f5f-6f20-4785-8f89-fb069872ff69",
"costumes": {
"1f637f5f-6f20-4785-8f89-fb069872ff69": {
"asset": "assets/1f637f5f-6f20-4785-8f89-fb069872ff69.png",
"name": "数字5",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"RJHBu5rrKNZ4B1jRx5aO": {
"type": "sprite_on_tap",
"id": "RJHBu5rrKNZ4B1jRx5aO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
109.91706085205078,
243.42916870117188
]
},
"Y5Bfg9bH77AdpI8LfQzl": {
"type": "get_audios",
"id": "Y5Bfg9bH77AdpI8LfQzl",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "0ec4ba3d-f935-487d-953c-88726530bb71"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "q43jAY78sBfXvIyGG2hy"
},
"q43jAY78sBfXvIyGG2hy": {
"type": "play_audio_2",
"id": "q43jAY78sBfXvIyGG2hy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-23.33333396911621,
496.440673828125
],
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_audios\" id=\"Y5Bfg9bH77AdpI8LfQzl\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">54fe442e-17c9-4de5-8797-a7eb2d624bf2</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "xBogJdXf3rzyq7SooXms"
},
"C2XEWrTe1A7esxMjbbdO": {
"type": "get_whole_audios",
"id": "C2XEWrTe1A7esxMjbbdO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sound_id": "all"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xBogJdXf3rzyq7SooXms"
},
"xBogJdXf3rzyq7SooXms": {
"type": "stop_audio_2",
"id": "xBogJdXf3rzyq7SooXms",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"audio": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_whole_audios\" id=\"C2XEWrTe1A7esxMjbbdO\" visible=\"visible\" inline=\"true\"><field name=\"sound_id\">all</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
119.9999771118164,
270.88507080078125
],
"parent_id": "RJHBu5rrKNZ4B1jRx5aO"
}
},
"connections": {
"RJHBu5rrKNZ4B1jRx5aO": {
"xBogJdXf3rzyq7SooXms": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"Y5Bfg9bH77AdpI8LfQzl": {},
"q43jAY78sBfXvIyGG2hy": {
"Y5Bfg9bH77AdpI8LfQzl": {
"type": "input",
"input_type": "value",
"input_name": "audio"
}
},
"C2XEWrTe1A7esxMjbbdO": {},
"xBogJdXf3rzyq7SooXms": {
"C2XEWrTe1A7esxMjbbdO": {
"type": "input",
"input_type": "value",
"input_name": "audio"
},
"q43jAY78sBfXvIyGG2hy": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "9f3295bc-f957-4060-82a3-8bc4761b05b8",
"name": "商店",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 420,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "d8c9910c-1906-41cc-9ad2-f509398cff96",
"costumes": {
"d8c9910c-1906-41cc-9ad2-f509398cff96": {
"asset": "assets/d8c9910c-1906-41cc-9ad2-f509398cff96.svg",
"name": "设置 (1)",
"pivot": {
"x": -5.347378344675803,
"y": -56.373893446093234
},
"rotateCenter": {
"x": -5.347378344675803,
"y": -56.373893446093234
}
}
},
"scripts": {
"blocks": {
"OLLP0ocZhJtmVbpOcvRY": {
"type": "sprite_on_tap",
"id": "OLLP0ocZhJtmVbpOcvRY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
0
]
},
"8LQDTiwl9fVx9KirW6Bw": {
"type": "self_disappear",
"id": "8LQDTiwl9fVx9KirW6Bw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
168.88888549804688,
1382.2216796875
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "eODd0KPXCcP9hXZH6tQD"
},
"V2AxuT8mTNudYxMq9iwo": {
"type": "broadcast_input",
"id": "V2AxuT8mTNudYxMq9iwo",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "eODd0KPXCcP9hXZH6tQD"
},
"eODd0KPXCcP9hXZH6tQD": {
"type": "self_listen",
"id": "eODd0KPXCcP9hXZH6tQD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"V2AxuT8mTNudYxMq9iwo\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
313.3333435058594,
304.4444580078125
]
},
"K4rejgspu9j5E5ZrAVub": {
"type": "broadcast_input",
"id": "K4rejgspu9j5E5ZrAVub",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "QigQZ9qtvYoaep44BOXG"
},
"QigQZ9qtvYoaep44BOXG": {
"type": "self_listen",
"id": "QigQZ9qtvYoaep44BOXG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"K4rejgspu9j5E5ZrAVub\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
495.5555419921875,
182.2222137451172
]
},
"edIPbJcvUvvgqxyKT7Wi": {
"type": "self_appear",
"id": "edIPbJcvUvvgqxyKT7Wi",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
157.7777862548828,
1149.777587890625
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "QigQZ9qtvYoaep44BOXG"
},
"WsqsgEHg7MDmEf194ZsZ": {
"type": "get_current_scene",
"id": "WsqsgEHg7MDmEf194ZsZ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "fOU96lVMCJ2U48h2OZ3e"
},
"fOU96lVMCJ2U48h2OZ3e": {
"type": "switch_to_screen",
"id": "fOU96lVMCJ2U48h2OZ3e",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-94.44444274902344,
41.99980926513672
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"WsqsgEHg7MDmEf194ZsZ\" visible=\"visible\" inline=\"true\"><field name=\"scene\">3eed1ea7-5aed-4d48-a039-9d0501f2cdf7</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "OLLP0ocZhJtmVbpOcvRY"
},
"VqNSWXkr58vCjFXEopiV": {
"type": "on_keydown",
"id": "VqNSWXkr58vCjFXEopiV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "84"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
44.44445037841797,
311.9997863769531
]
},
"HeUDOgLP8MawSGivic0O": {
"type": "switch_to_screen",
"id": "HeUDOgLP8MawSGivic0O",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
48,
136
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"SGsjAqyCjy81yNsHSIqR\" visible=\"visible\" inline=\"true\"><field name=\"scene\">e0467d63-e28c-4ace-a939-fc75e93c5080</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "VqNSWXkr58vCjFXEopiV"
},
"SGsjAqyCjy81yNsHSIqR": {
"type": "get_current_scene",
"id": "SGsjAqyCjy81yNsHSIqR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "HeUDOgLP8MawSGivic0O"
}
},
"connections": {
"OLLP0ocZhJtmVbpOcvRY": {
"fOU96lVMCJ2U48h2OZ3e": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"8LQDTiwl9fVx9KirW6Bw": {},
"V2AxuT8mTNudYxMq9iwo": {},
"eODd0KPXCcP9hXZH6tQD": {
"8LQDTiwl9fVx9KirW6Bw": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"V2AxuT8mTNudYxMq9iwo": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"K4rejgspu9j5E5ZrAVub": {},
"QigQZ9qtvYoaep44BOXG": {
"K4rejgspu9j5E5ZrAVub": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"edIPbJcvUvvgqxyKT7Wi": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"edIPbJcvUvvgqxyKT7Wi": {},
"WsqsgEHg7MDmEf194ZsZ": {},
"fOU96lVMCJ2U48h2OZ3e": {
"WsqsgEHg7MDmEf194ZsZ": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"VqNSWXkr58vCjFXEopiV": {
"HeUDOgLP8MawSGivic0O": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"HeUDOgLP8MawSGivic0O": {
"SGsjAqyCjy81yNsHSIqR": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"SGsjAqyCjy81yNsHSIqR": {}
},
"comments": {}
}
},
{
"id": "43b3564d-b78e-402d-916b-949ff2658e90",
"name": "隐身卡商人",
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080",
"x": -200,
"y": 250,
"scale": 20,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "4a699fef-6b03-49d9-8b2a-f9fe95ddcd68",
"costumes": {
"4a699fef-6b03-49d9-8b2a-f9fe95ddcd68": {
"asset": "assets/4a699fef-6b03-49d9-8b2a-f9fe95ddcd68.svg",
"name": "新角色(5)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"cbV8vlUbwpoULBBINLoK": {
"type": "sprite_on_tap",
"id": "cbV8vlUbwpoULBBINLoK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
126.66667175292969,
128.66647338867188
]
},
"ACbWsaC0dy9XZyzwy7UD": {
"type": "text",
"id": "ACbWsaC0dy9XZyzwy7UD",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XelM6v3Ghkl8j8pv7XmO"
},
"Sz2UYGPFtauqW9Y8vysU": {
"type": "text",
"id": "Sz2UYGPFtauqW9Y8vysU",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "是否购买？"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XelM6v3Ghkl8j8pv7XmO"
},
"XelM6v3Ghkl8j8pv7XmO": {
"type": "ask_and_choose",
"id": "XelM6v3Ghkl8j8pv7XmO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"question": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"Sz2UYGPFtauqW9Y8vysU\" visible=\"visible\"><field name=\"TEXT\">1+1=?</field></shadow>",
"CHOICE0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"ACbWsaC0dy9XZyzwy7UD\" visible=\"visible\"><field name=\"TEXT\">1</field></shadow>",
"CHOICE1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"ofhPEkbOLftPP2OfdGrt\" visible=\"visible\"><field name=\"TEXT\">2</field></shadow>",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"2\"></mutation>",
"is_output": false,
"location": [
214.44444274902344,
370.22210693359375
],
"parent_id": "mr7oTxybAlgxUCY0ktrY"
},
"ofhPEkbOLftPP2OfdGrt": {
"type": "text",
"id": "ofhPEkbOLftPP2OfdGrt",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "不买，走了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XelM6v3Ghkl8j8pv7XmO"
},
"mr7oTxybAlgxUCY0ktrY": {
"type": "create_stage_dialog",
"id": "mr7oTxybAlgxUCY0ktrY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"nUON2bLSAv2rEap919MK\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
232.22222900390625,
605.3331298828125
],
"parent_id": "cbV8vlUbwpoULBBINLoK"
},
"nUON2bLSAv2rEap919MK": {
"type": "text",
"id": "nUON2bLSAv2rEap919MK",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "隐身卡功能：使玩家隐身10秒钟 属性：一次性 价格：50金币/张"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "mr7oTxybAlgxUCY0ktrY"
},
"PpUyuG02HjCcHDV5Q6ci": {
"type": "controls_if",
"id": "PpUyuG02HjCcHDV5Q6ci",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
414.2220458984375
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"HynDWoWWDHOHs61dlkqV\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "XelM6v3Ghkl8j8pv7XmO"
},
"MqkMyRQiVqhWfvWL9N5X": {
"type": "get_choice_or_index",
"id": "MqkMyRQiVqhWfvWL9N5X",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"type": "select_content"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
110,
514.66650390625
],
"parent_id": "Rm5ImeA0fIWgHLWpge55"
},
"Rm5ImeA0fIWgHLWpge55": {
"type": "logic_compare",
"id": "Rm5ImeA0fIWgHLWpge55",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"3UlFJzqbiMiBqI6XAY9C\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"hnfkHXmpzVZ22ir1V5VV\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
145.55555725097656,
660.2219848632812
],
"parent_id": "PpUyuG02HjCcHDV5Q6ci"
},
"hnfkHXmpzVZ22ir1V5VV": {
"type": "math_number",
"id": "hnfkHXmpzVZ22ir1V5VV",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "买"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Rm5ImeA0fIWgHLWpge55"
},
"1zj0rPNOyP0tuJbUAwxF": {
"type": "controls_if",
"id": "1zj0rPNOyP0tuJbUAwxF",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
513.5553588867188
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eEC914hDCz0pfAKTpiCE\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "PpUyuG02HjCcHDV5Q6ci"
},
"vRCbgkGzqqau8hQCZ2gu": {
"type": "cloud_variables_get",
"id": "vRCbgkGzqqau8hQCZ2gu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
161.11111450195312,
625.3316040039062
],
"parent_id": "1Yw0VMRSZjIrW1WABtlj"
},
"1Yw0VMRSZjIrW1WABtlj": {
"type": "logic_compare",
"id": "1Yw0VMRSZjIrW1WABtlj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"dSX5fgpBPket4HVqlIWa\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"fioqGM2xoxF6pF4xu5M5\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
166.6666717529297,
679.1109008789062
],
"parent_id": "1zj0rPNOyP0tuJbUAwxF"
},
"fioqGM2xoxF6pF4xu5M5": {
"type": "math_number",
"id": "fioqGM2xoxF6pF4xu5M5",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1Yw0VMRSZjIrW1WABtlj"
},
"0KiTsDVecw0ie8iQXE3J": {
"type": "text",
"id": "0KiTsDVecw0ie8iQXE3J",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "买1张隐身卡需要50金币，你的金币还不够哦"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "DiVZ3qmyfsZLDsVfLKzJ"
},
"DiVZ3qmyfsZLDsVfLKzJ": {
"type": "create_stage_dialog",
"id": "DiVZ3qmyfsZLDsVfLKzJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-1.1111280918121338,
427.5553283691406
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"0KiTsDVecw0ie8iQXE3J\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "1zj0rPNOyP0tuJbUAwxF"
},
"1Ipi5osrdpNFjUB0Q8oM": {
"type": "create_stage_dialog",
"id": "1Ipi5osrdpNFjUB0Q8oM",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-1.1111280918121338,
427.5553283691406
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"EJwqJYudbfm74c0haBkv\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "1zj0rPNOyP0tuJbUAwxF"
},
"5MxJxCB25CRQl95NeP3p": {
"type": "math_number",
"id": "5MxJxCB25CRQl95NeP3p",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "IBJimH0RJklU2KpshVaV"
},
"94znScD5Bn4L3gAJUr6l": {
"type": "math_round",
"id": "94znScD5Bn4L3gAJUr6l",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
708.8888549804688,
638.6664428710938
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"cHxtpH0dM9176MhD0jny\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XA3WVYMAr0ZeQwsuR6F3"
},
"EoefWmt1W8g13vRasej7": {
"type": "text",
"id": "EoefWmt1W8g13vRasej7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "个金币，最多可买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XA3WVYMAr0ZeQwsuR6F3"
},
"IBJimH0RJklU2KpshVaV": {
"type": "math_arithmetic",
"id": "IBJimH0RJklU2KpshVaV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
214.44442749023438,
741.3331298828125
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"qSSjZ068QIAkOnY0lUB3\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"5MxJxCB25CRQl95NeP3p\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "94znScD5Bn4L3gAJUr6l"
},
"WUlRM2o8rlzZRGMs7Uhw": {
"type": "cloud_variables_get",
"id": "WUlRM2o8rlzZRGMs7Uhw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
370,
598.6649169921875
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XA3WVYMAr0ZeQwsuR6F3"
},
"XA3WVYMAr0ZeQwsuR6F3": {
"type": "text_join",
"id": "XA3WVYMAr0ZeQwsuR6F3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
214.44442749023438,
626.66650390625
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"jFg38trwmHtcUqjeE6Zu\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"rwWyHWAMnRV3t8NqD5Mu\" visible=\"visible\"><field name=\"TEXT\">c</field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"EoefWmt1W8g13vRasej7\"><field name=\"TEXT\"/></shadow>",
"ADD3": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"jDYDrlu3qaBmoyod7lZC\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD4": "<shadow type=\"text\" id=\"c0UQpTeDFrpd96mG6Q2Q\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"5\"></mutation>",
"is_output": true,
"parent_id": "1Ipi5osrdpNFjUB0Q8oM"
},
"c0UQpTeDFrpd96mG6Q2Q": {
"type": "text",
"id": "c0UQpTeDFrpd96mG6Q2Q",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张隐身卡，请问你要买多少张？"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XA3WVYMAr0ZeQwsuR6F3"
},
"jFg38trwmHtcUqjeE6Zu": {
"type": "text",
"id": "jFg38trwmHtcUqjeE6Zu",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你目前有"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "XA3WVYMAr0ZeQwsuR6F3"
},
"q87Cy6dITmXIXpRdL2iy": {
"type": "cloud_variables_get",
"id": "q87Cy6dITmXIXpRdL2iy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
248.8888702392578,
749.7760009765625
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "IBJimH0RJklU2KpshVaV"
},
"UVcRJCjxmL1E7RuHEkCZ": {
"type": "text",
"id": "UVcRJCjxmL1E7RuHEkCZ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "hello hello请输入要买多少张？（手机版无法输入就尝试在输入后点击回车键 （回车键一般在输入法右下角））"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rkralSBMkRD8NQRUf0Bn"
},
"rkralSBMkRD8NQRUf0Bn": {
"type": "self_ask",
"id": "rkralSBMkRD8NQRUf0Bn",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-109.99993133544922,
656.4443359375
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"UVcRJCjxmL1E7RuHEkCZ\" visible=\"visible\"><field name=\"TEXT\">你的名字</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "1Ipi5osrdpNFjUB0Q8oM"
},
"nTRYvF3DI3TFDMTov0pt": {
"type": "controls_if",
"id": "nTRYvF3DI3TFDMTov0pt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
73.33333587646484,
535.777587890625
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"4Z0y6AQZSpppauiYJ21Q\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "rkralSBMkRD8NQRUf0Bn"
},
"di9YXhwtgztNWYCH7DvG": {
"type": "get_answer",
"id": "di9YXhwtgztNWYCH7DvG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
296.6667175292969,
748.6665649414062
],
"parent_id": "rlMCxeQrfDtmWHgpuKaj"
},
"1UFpYDLI1LKy34vInZ8g": {
"type": "math_number",
"id": "1UFpYDLI1LKy34vInZ8g",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rlMCxeQrfDtmWHgpuKaj"
},
"rlMCxeQrfDtmWHgpuKaj": {
"type": "math_arithmetic",
"id": "rlMCxeQrfDtmWHgpuKaj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"QLprsSzY2sQ8MoKgW6Mb\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"1UFpYDLI1LKy34vInZ8g\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
356.6667175292969,
725.777587890625
],
"parent_id": "HNlRNWFooOJUlCdrNbYP"
},
"HNlRNWFooOJUlCdrNbYP": {
"type": "logic_compare",
"id": "HNlRNWFooOJUlCdrNbYP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"23BshvybMOCaP5L2XSWR\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"pD1yzCRCHPD8YZC7d5vo\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "LTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
227.77783203125,
842.4442138671875
],
"parent_id": "nTRYvF3DI3TFDMTov0pt"
},
"QSp3q2262IEt2j6NB3Ot": {
"type": "cloud_variables_get",
"id": "QSp3q2262IEt2j6NB3Ot",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
73.33338165283203,
224.22044372558594
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "HNlRNWFooOJUlCdrNbYP"
},
"sIR9kVbp3csXpxohD7co": {
"type": "create_stage_dialog",
"id": "sIR9kVbp3csXpxohD7co",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
73.33338165283203,
459.7775573730469
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"mP76IRw1qLLOl7xyBMPr\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "nTRYvF3DI3TFDMTov0pt"
},
"1fWfK68EquZbmOBm3u6r": {
"type": "math_arithmetic",
"id": "1fWfK68EquZbmOBm3u6r",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"paTkO1F8yuEDvktCLpGm\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"YQTPuymRqCXpBYjlM5r2\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "H93iGiPIIUKLgKy7Ymot"
},
"EaNIkc0TZQmPD0nkGpHZ": {
"type": "cloud_variables_get",
"id": "EaNIkc0TZQmPD0nkGpHZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
1036.22216796875,
822.7777709960938
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"H93iGiPIIUKLgKy7Ymot": {
"type": "math_round",
"id": "H93iGiPIIUKLgKy7Ymot",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
1610.5555419921875,
558.111083984375
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"OJFkkI469u1MK4qNU6in\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"J6JBWi9xxTyIaZMp0RaJ": {
"type": "text",
"id": "J6JBWi9xxTyIaZMp0RaJ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张卡片，点击继续以选择是否由系统自动帮您购买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"MEcHENcsxRlf2xGm5FjM": {
"type": "text",
"id": "MEcHENcsxRlf2xGm5FjM",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张需要"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"UQpzQPbPn4E0wzUdgYZn": {
"type": "math_arithmetic",
"id": "UQpzQPbPn4E0wzUdgYZn",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
581,
841.888916015625
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"eVB34phOhKqv0zAQgwyf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"e9gedYbXCWIRyfOYlePW\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"YQTPuymRqCXpBYjlM5r2": {
"type": "math_number",
"id": "YQTPuymRqCXpBYjlM5r2",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1fWfK68EquZbmOBm3u6r"
},
"b9wgktbviMPFwMeYPOMo": {
"type": "text",
"id": "b9wgktbviMPFwMeYPOMo",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "个金币，而你只有"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"cDAcxkPbg7FwknbppL68": {
"type": "text",
"id": "cDAcxkPbg7FwknbppL68",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "购买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"e9gedYbXCWIRyfOYlePW": {
"type": "math_number",
"id": "e9gedYbXCWIRyfOYlePW",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "UQpzQPbPn4E0wzUdgYZn"
},
"eQttG5ODMP8tEEpg0p6Y": {
"type": "cloud_variables_get",
"id": "eQttG5ODMP8tEEpg0p6Y",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1fWfK68EquZbmOBm3u6r"
},
"hOln7gZ1yJ1JvlTF3YvO": {
"type": "get_answer",
"id": "hOln7gZ1yJ1JvlTF3YvO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
394.5555419921875,
808.3333740234375
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"n5wW4eYollMrcBqVR5SP": {
"type": "text_join",
"id": "n5wW4eYollMrcBqVR5SP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
347.77783203125,
556.888671875
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"cDAcxkPbg7FwknbppL68\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"1J333ZZgVFTP3MNBnlYQ\" visible=\"visible\"><field name=\"TEXT\">c</field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"MEcHENcsxRlf2xGm5FjM\"><field name=\"TEXT\"/></shadow>",
"ADD3": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"8MnpLXZM0WBqmkG0XTdQ\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD4": "<shadow type=\"text\" id=\"b9wgktbviMPFwMeYPOMo\"><field name=\"TEXT\"/></shadow>",
"ADD5": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"K8fe0x9vXoqtiBOSW3dZ\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD6": "<shadow type=\"text\" id=\"s9qJGR3xHuPvvRgPDWi7\"><field name=\"TEXT\"/></shadow>",
"ADD7": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"gzM9faMhQpOjeBgyypwR\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD8": "<shadow type=\"text\" id=\"J6JBWi9xxTyIaZMp0RaJ\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"9\"></mutation>",
"is_output": true,
"parent_id": "sIR9kVbp3csXpxohD7co"
},
"s9qJGR3xHuPvvRgPDWi7": {
"type": "text",
"id": "s9qJGR3xHuPvvRgPDWi7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "个金币，以你的金币数量看，最多只能买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "n5wW4eYollMrcBqVR5SP"
},
"2Ldan3ULeSsMCLyIPLMQ": {
"type": "text",
"id": "2Ldan3ULeSsMCLyIPLMQ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "不同意，走了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "j5F3qNBClgyOc1HUPfsK"
},
"3FlZiPboBhWdM91VPOFR": {
"type": "text",
"id": "3FlZiPboBhWdM91VPOFR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "是否同意系统自动帮您买隐身卡？"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "j5F3qNBClgyOc1HUPfsK"
},
"j5F3qNBClgyOc1HUPfsK": {
"type": "ask_and_choose",
"id": "j5F3qNBClgyOc1HUPfsK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
90,
731.3331298828125
],
"shadows": {
"question": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"3FlZiPboBhWdM91VPOFR\" visible=\"visible\"><field name=\"TEXT\">1+1=?</field></shadow>",
"CHOICE1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"2Ldan3ULeSsMCLyIPLMQ\" visible=\"visible\"><field name=\"TEXT\">2</field></shadow>",
"MUTATE_BUTTON": "",
"CHOICE0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"9oB2gabUTPzaA46dxgeP\" visible=\"visible\"><field name=\"TEXT\">我同意买</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"2\"></mutation>",
"is_output": false,
"parent_id": "sIR9kVbp3csXpxohD7co"
},
"2wGZ4EBf4m0kp8Tacusg": {
"type": "math_number",
"id": "2wGZ4EBf4m0kp8Tacusg",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "x0gWKJiOOP4io54qefca"
},
"93vOB3dnsI2N6SFz4cxf": {
"type": "math_round",
"id": "93vOB3dnsI2N6SFz4cxf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
750.5555419921875,
615.888916015625
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"AG4cKqCqFU6DmVW3Uad1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "h3jsklDjWVwbMHOSUxJT"
},
"9z0qSrURdwM98htRdBOb": {
"type": "text",
"id": "9z0qSrURdwM98htRdBOb",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "我同意买"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "h3jsklDjWVwbMHOSUxJT"
},
"h3jsklDjWVwbMHOSUxJT": {
"type": "text_join",
"id": "h3jsklDjWVwbMHOSUxJT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
578.888916015625,
607.999755859375
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"9z0qSrURdwM98htRdBOb\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"85kYpzvZVYvGAgIWdaY0\" visible=\"visible\"><field name=\"TEXT\">c</field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"zCHW38tj1t39kZjzS1hg\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"3\"></mutation>",
"is_output": true,
"parent_id": "j5F3qNBClgyOc1HUPfsK"
},
"mENxdRebYdlXeCgziJF1": {
"type": "cloud_variables_get",
"id": "mENxdRebYdlXeCgziJF1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "x0gWKJiOOP4io54qefca"
},
"x0gWKJiOOP4io54qefca": {
"type": "math_arithmetic",
"id": "x0gWKJiOOP4io54qefca",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9E9bQ24Iml2WLRIUtCzi\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"2wGZ4EBf4m0kp8Tacusg\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "93vOB3dnsI2N6SFz4cxf"
},
"zCHW38tj1t39kZjzS1hg": {
"type": "text",
"id": "zCHW38tj1t39kZjzS1hg",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张卡"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "h3jsklDjWVwbMHOSUxJT"
},
"s1rgdjTgFWQM3TGU5wd0": {
"type": "controls_if",
"id": "s1rgdjTgFWQM3TGU5wd0",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
83.33333587646484,
386.44427490234375
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"jSCzrAwrWswrqqLOYPAy\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "j5F3qNBClgyOc1HUPfsK"
},
"0fFH6Z6HuOArIyJnANsc": {
"type": "get_choice_or_index",
"id": "0fFH6Z6HuOArIyJnANsc",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"type": "select_index"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
360.00006103515625,
691.3331298828125
],
"parent_id": "uranEXRRQLntEEku9d0H"
},
"uranEXRRQLntEEku9d0H": {
"type": "logic_compare",
"id": "uranEXRRQLntEEku9d0H",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"vfMNz7J60tp0ZXSdjYe1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ze0zZgdMkKgQQd00NVuk\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
517.77783203125,
744.6664428710938
],
"parent_id": "s1rgdjTgFWQM3TGU5wd0"
},
"ze0zZgdMkKgQQd00NVuk": {
"type": "math_number",
"id": "ze0zZgdMkKgQQd00NVuk",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "uranEXRRQLntEEku9d0H"
},
"tQXAhH8H3kElhi5FJJCG": {
"type": "change_cloud_variable",
"id": "tQXAhH8H3kElhi5FJJCG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"sGPThTiJ8PG9utDXAPPo\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
551.1111450195312,
733.5533447265625
],
"parent_id": "fsUs8968UNUG4heIm8Bh"
},
"2zHW1m5q03ieF2BeBEzk": {
"type": "cloud_variables_get",
"id": "2zHW1m5q03ieF2BeBEzk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "f1mKf6fYCAyDfFDN5Xwe"
},
"K8R3g0TrA61FD3TvHOyW": {
"type": "math_number",
"id": "K8R3g0TrA61FD3TvHOyW",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "f1mKf6fYCAyDfFDN5Xwe"
},
"f1mKf6fYCAyDfFDN5Xwe": {
"type": "math_arithmetic",
"id": "f1mKf6fYCAyDfFDN5Xwe",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"gHymtaBiXJb5KalMj6rA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"K8R3g0TrA61FD3TvHOyW\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "kRRMsJsRfhPcmItGcZPH"
},
"kRRMsJsRfhPcmItGcZPH": {
"type": "math_round",
"id": "kRRMsJsRfhPcmItGcZPH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Gh7zZpxHgbvIRuNrxDEt\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
865.6666870117188,
836.5555419921875
],
"parent_id": "tkMpxFXinHlCa7WUepCz"
},
"TLwQumcoteQYAXPltcNq": {
"type": "math_number",
"id": "TLwQumcoteQYAXPltcNq",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "tkMpxFXinHlCa7WUepCz"
},
"tkMpxFXinHlCa7WUepCz": {
"type": "math_arithmetic",
"id": "tkMpxFXinHlCa7WUepCz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"IPECKd4jxuxTYsrVcwjt\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"TLwQumcoteQYAXPltcNq\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
575.111083984375,
745.6666870117188
],
"parent_id": "tQXAhH8H3kElhi5FJJCG"
},
"fsUs8968UNUG4heIm8Bh": {
"type": "change_cloud_variable",
"id": "fsUs8968UNUG4heIm8Bh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"35uI0lHfwksIUMVwqLD3\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"method": "increase",
"valname": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
189.55555725097656,
877.1109619140625
],
"parent_id": "7rxZLgmeY29jRu1E6s8I"
},
"PnR8Cmbh2BJjCYsPxtdl": {
"type": "math_arithmetic",
"id": "PnR8Cmbh2BJjCYsPxtdl",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Dsvo0JYopCVnLq7lrWV1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"egwSpQmdmBc9AvmI6vhf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sTGkbsVbvhxMqODSzB47"
},
"egwSpQmdmBc9AvmI6vhf": {
"type": "math_number",
"id": "egwSpQmdmBc9AvmI6vhf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PnR8Cmbh2BJjCYsPxtdl"
},
"jCs6mQ94AZRHQCJLNYoZ": {
"type": "cloud_variables_get",
"id": "jCs6mQ94AZRHQCJLNYoZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PnR8Cmbh2BJjCYsPxtdl"
},
"sTGkbsVbvhxMqODSzB47": {
"type": "math_round",
"id": "sTGkbsVbvhxMqODSzB47",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
515,
815
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"OjDp0qZqWiDlUoImP0gn\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "fsUs8968UNUG4heIm8Bh"
},
"7rxZLgmeY29jRu1E6s8I": {
"type": "create_stage_dialog",
"id": "7rxZLgmeY29jRu1E6s8I",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"4JCgifH1lKlFAImq7XGB\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
185.11111450195312,
826.8887329101562
],
"parent_id": "s1rgdjTgFWQM3TGU5wd0"
},
"Ap6Zxok9s3Rdb8gGAFBL": {
"type": "math_round",
"id": "Ap6Zxok9s3Rdb8gGAFBL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
1425.2222900390625,
836.7777709960938
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"sesS9E80EkpEEMFQOeOb\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rGlsWfoFte0vM5ljLgCG"
},
"BJ11OAhBQRNb8urCibbZ": {
"type": "cloud_variables_get",
"id": "BJ11OAhBQRNb8urCibbZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VMNc5LnYiuB5MXc1pAoz"
},
"ClNARVsE5iUQyh6KkYQO": {
"type": "math_arithmetic",
"id": "ClNARVsE5iUQyh6KkYQO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"rWH9P04VqlQpjFZ7MbFe\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"GkAZtYucLu8Cpkmkm0WN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "bBb6RbBKjWoq9YeJVMV5"
},
"GkAZtYucLu8Cpkmkm0WN": {
"type": "math_number",
"id": "GkAZtYucLu8Cpkmkm0WN",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ClNARVsE5iUQyh6KkYQO"
},
"MHQfJocgqskDETMZwmI0": {
"type": "text",
"id": "MHQfJocgqskDETMZwmI0",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张隐身卡"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rGlsWfoFte0vM5ljLgCG"
},
"PuPGhCfeFbJzl42PeTjw": {
"type": "math_number",
"id": "PuPGhCfeFbJzl42PeTjw",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VMNc5LnYiuB5MXc1pAoz"
},
"VMNc5LnYiuB5MXc1pAoz": {
"type": "math_arithmetic",
"id": "VMNc5LnYiuB5MXc1pAoz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Dwqu0LydgHajGTrSRn5l\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"PuPGhCfeFbJzl42PeTjw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "DIVIDE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Ap6Zxok9s3Rdb8gGAFBL"
},
"WuhdJsHXij84eEHCaSMm": {
"type": "math_number",
"id": "WuhdJsHXij84eEHCaSMm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xzEvTmfLaZmvXjQQimIG"
},
"bBb6RbBKjWoq9YeJVMV5": {
"type": "math_round",
"id": "bBb6RbBKjWoq9YeJVMV5",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"NUM": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"oChhKvxkBoVkpZCb105t\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">3.1</field></shadow>"
},
"fields": {
"OP": "ROUNDDOWN"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xzEvTmfLaZmvXjQQimIG"
},
"jcicTkrKW5HWWmHwiAf7": {
"type": "cloud_variables_get",
"id": "jcicTkrKW5HWWmHwiAf7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ClNARVsE5iUQyh6KkYQO"
},
"k8wU4L0kZj1ONlo10Cv1": {
"type": "text",
"id": "k8wU4L0kZj1ONlo10Cv1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "购买成功，您本次购买花费了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rGlsWfoFte0vM5ljLgCG"
},
"oLaQ1ZR3CwguC2iyCMtc": {
"type": "text",
"id": "oLaQ1ZR3CwguC2iyCMtc",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "个金币，买回了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rGlsWfoFte0vM5ljLgCG"
},
"rGlsWfoFte0vM5ljLgCG": {
"type": "text_join",
"id": "rGlsWfoFte0vM5ljLgCG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
368.8889465332031,
826.8886108398438
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"k8wU4L0kZj1ONlo10Cv1\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"P1ZjCmpMKjHhaH1THQ8o\" visible=\"visible\"><field name=\"TEXT\">c</field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"oLaQ1ZR3CwguC2iyCMtc\"><field name=\"TEXT\"/></shadow>",
"ADD3": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"AfaZGs7W2YIRqkVYZjUy\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD4": "<shadow type=\"text\" id=\"MHQfJocgqskDETMZwmI0\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"5\"></mutation>",
"is_output": true,
"parent_id": "7rxZLgmeY29jRu1E6s8I"
},
"xzEvTmfLaZmvXjQQimIG": {
"type": "math_arithmetic",
"id": "xzEvTmfLaZmvXjQQimIG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
680.3333129882812,
833
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"KjahufvpF9OZ1Ta9eIlf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"WuhdJsHXij84eEHCaSMm\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rGlsWfoFte0vM5ljLgCG"
},
"ocaHVMg2roiBjt3rveqE": {
"type": "create_stage_dialog",
"id": "ocaHVMg2roiBjt3rveqE",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"NqDqBjGSiQyRYVzd0WMW\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
179.11111450195312,
483.5553894042969
],
"parent_id": "nTRYvF3DI3TFDMTov0pt"
},
"f7S8z4EIvZvlwIywyypz": {
"type": "get_answer",
"id": "f7S8z4EIvZvlwIywyypz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
824.5555419921875,
1105.4444580078125
],
"parent_id": "UQpzQPbPn4E0wzUdgYZn"
},
"1Ir5pZncrjQdSVggiNv3": {
"type": "math_arithmetic",
"id": "1Ir5pZncrjQdSVggiNv3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
625.4444580078125,
505.22222900390625
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"L35D9vC2T2pTigveHTCQ\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"rVWFUoKuedMffCwarU2E\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VUQgJBG7sPzXGeJ7T4gH"
},
"LoJhthlJM0TqUrFjD6TS": {
"type": "get_answer",
"id": "LoJhthlJM0TqUrFjD6TS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1Ir5pZncrjQdSVggiNv3"
},
"V52vapDOvpd3Ia2byokD": {
"type": "get_answer",
"id": "V52vapDOvpd3Ia2byokD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
1052.695068359375,
509.1109619140625
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VUQgJBG7sPzXGeJ7T4gH"
},
"VUQgJBG7sPzXGeJ7T4gH": {
"type": "text_join",
"id": "VUQgJBG7sPzXGeJ7T4gH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
347.77783203125,
499.1107177734375
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"jqzDCSlsqUkigx9I3hhY\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"9C8GlfRFm68FtV6Xpu09\" visible=\"visible\"><field name=\"TEXT\">c</field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"aZXwoMRhpgMI0ygtO1v9\"><field name=\"TEXT\"/></shadow>",
"ADD3": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"katjk3MpCVrwM7sfjsOM\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD4": "<shadow type=\"text\" id=\"qj1MA3RwHb60mdvyMPI0\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"5\"></mutation>",
"is_output": true,
"parent_id": "ocaHVMg2roiBjt3rveqE"
},
"aZXwoMRhpgMI0ygtO1v9": {
"type": "text",
"id": "aZXwoMRhpgMI0ygtO1v9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "个金币，购买了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VUQgJBG7sPzXGeJ7T4gH"
},
"jqzDCSlsqUkigx9I3hhY": {
"type": "text",
"id": "jqzDCSlsqUkigx9I3hhY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "购买成功，您本次花费了"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VUQgJBG7sPzXGeJ7T4gH"
},
"qj1MA3RwHb60mdvyMPI0": {
"type": "text",
"id": "qj1MA3RwHb60mdvyMPI0",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "张隐身卡"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "VUQgJBG7sPzXGeJ7T4gH"
},
"rVWFUoKuedMffCwarU2E": {
"type": "math_number",
"id": "rVWFUoKuedMffCwarU2E",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "1Ir5pZncrjQdSVggiNv3"
},
"SRCprhFfXEuJ3FCjX2bf": {
"type": "change_cloud_variable",
"id": "SRCprhFfXEuJ3FCjX2bf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"bhckT2xzsLvrcuycmRDx\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
181.33334350585938,
490.2220458984375
],
"parent_id": "LizYxR6cKAgZntLqne8Z"
},
"MUQ890tjvLTJJyr9HZbA": {
"type": "get_answer",
"id": "MUQ890tjvLTJJyr9HZbA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SIXLgYJ5TDnyUXSFWzrK"
},
"SIXLgYJ5TDnyUXSFWzrK": {
"type": "math_arithmetic",
"id": "SIXLgYJ5TDnyUXSFWzrK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
765,
787
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"uufZ0rXXsJ87wjwoCfta\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"dcFs9II31QeOCN36kNHd\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">50</field></shadow>"
},
"fields": {
"OP": "MULTIPLY"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SRCprhFfXEuJ3FCjX2bf"
},
"dcFs9II31QeOCN36kNHd": {
"type": "math_number",
"id": "dcFs9II31QeOCN36kNHd",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SIXLgYJ5TDnyUXSFWzrK"
},
"LizYxR6cKAgZntLqne8Z": {
"type": "change_cloud_variable",
"id": "LizYxR6cKAgZntLqne8Z",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"vo5p2keOCTItAe9XvvGA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "75cbf2e5-8310-4c54-b3c5-1002a25d4685",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
172.44444274902344,
545.9998168945312
],
"parent_id": "ocaHVMg2roiBjt3rveqE"
},
"eIAw7wPsaLNaPOKpw23f": {
"type": "get_answer",
"id": "eIAw7wPsaLNaPOKpw23f",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
687,
597
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "LizYxR6cKAgZntLqne8Z"
}
},
"connections": {
"cbV8vlUbwpoULBBINLoK": {
"mr7oTxybAlgxUCY0ktrY": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"ACbWsaC0dy9XZyzwy7UD": {},
"Sz2UYGPFtauqW9Y8vysU": {},
"XelM6v3Ghkl8j8pv7XmO": {
"ACbWsaC0dy9XZyzwy7UD": {
"type": "input",
"input_type": "value",
"input_name": "CHOICE0"
},
"Sz2UYGPFtauqW9Y8vysU": {
"type": "input",
"input_type": "value",
"input_name": "question"
},
"ofhPEkbOLftPP2OfdGrt": {
"type": "input",
"input_type": "value",
"input_name": "CHOICE1"
},
"PpUyuG02HjCcHDV5Q6ci": {
"type": "next"
}
},
"ofhPEkbOLftPP2OfdGrt": {},
"mr7oTxybAlgxUCY0ktrY": {
"nUON2bLSAv2rEap919MK": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"XelM6v3Ghkl8j8pv7XmO": {
"type": "next"
}
},
"nUON2bLSAv2rEap919MK": {},
"PpUyuG02HjCcHDV5Q6ci": {
"Rm5ImeA0fIWgHLWpge55": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"1zj0rPNOyP0tuJbUAwxF": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"MqkMyRQiVqhWfvWL9N5X": {},
"Rm5ImeA0fIWgHLWpge55": {
"hnfkHXmpzVZ22ir1V5VV": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"MqkMyRQiVqhWfvWL9N5X": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"hnfkHXmpzVZ22ir1V5VV": {},
"1zj0rPNOyP0tuJbUAwxF": {
"1Yw0VMRSZjIrW1WABtlj": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"DiVZ3qmyfsZLDsVfLKzJ": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"1Ipi5osrdpNFjUB0Q8oM": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"vRCbgkGzqqau8hQCZ2gu": {},
"1Yw0VMRSZjIrW1WABtlj": {
"fioqGM2xoxF6pF4xu5M5": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"vRCbgkGzqqau8hQCZ2gu": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"fioqGM2xoxF6pF4xu5M5": {},
"0KiTsDVecw0ie8iQXE3J": {},
"DiVZ3qmyfsZLDsVfLKzJ": {
"0KiTsDVecw0ie8iQXE3J": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"1Ipi5osrdpNFjUB0Q8oM": {
"XA3WVYMAr0ZeQwsuR6F3": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"rkralSBMkRD8NQRUf0Bn": {
"type": "next"
}
},
"5MxJxCB25CRQl95NeP3p": {},
"94znScD5Bn4L3gAJUr6l": {
"IBJimH0RJklU2KpshVaV": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"EoefWmt1W8g13vRasej7": {},
"IBJimH0RJklU2KpshVaV": {
"5MxJxCB25CRQl95NeP3p": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"q87Cy6dITmXIXpRdL2iy": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"WUlRM2o8rlzZRGMs7Uhw": {},
"XA3WVYMAr0ZeQwsuR6F3": {
"94znScD5Bn4L3gAJUr6l": {
"type": "input",
"input_type": "value",
"input_name": "ADD3"
},
"EoefWmt1W8g13vRasej7": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
},
"WUlRM2o8rlzZRGMs7Uhw": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
},
"c0UQpTeDFrpd96mG6Q2Q": {
"type": "input",
"input_type": "value",
"input_name": "ADD4"
},
"jFg38trwmHtcUqjeE6Zu": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
}
},
"c0UQpTeDFrpd96mG6Q2Q": {},
"jFg38trwmHtcUqjeE6Zu": {},
"q87Cy6dITmXIXpRdL2iy": {},
"UVcRJCjxmL1E7RuHEkCZ": {},
"rkralSBMkRD8NQRUf0Bn": {
"UVcRJCjxmL1E7RuHEkCZ": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"nTRYvF3DI3TFDMTov0pt": {
"type": "next"
}
},
"nTRYvF3DI3TFDMTov0pt": {
"HNlRNWFooOJUlCdrNbYP": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"sIR9kVbp3csXpxohD7co": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"ocaHVMg2roiBjt3rveqE": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"di9YXhwtgztNWYCH7DvG": {},
"1UFpYDLI1LKy34vInZ8g": {},
"rlMCxeQrfDtmWHgpuKaj": {
"1UFpYDLI1LKy34vInZ8g": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"di9YXhwtgztNWYCH7DvG": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"HNlRNWFooOJUlCdrNbYP": {
"rlMCxeQrfDtmWHgpuKaj": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"QSp3q2262IEt2j6NB3Ot": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"QSp3q2262IEt2j6NB3Ot": {},
"sIR9kVbp3csXpxohD7co": {
"n5wW4eYollMrcBqVR5SP": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"j5F3qNBClgyOc1HUPfsK": {
"type": "next"
}
},
"1fWfK68EquZbmOBm3u6r": {
"YQTPuymRqCXpBYjlM5r2": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"eQttG5ODMP8tEEpg0p6Y": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"EaNIkc0TZQmPD0nkGpHZ": {},
"H93iGiPIIUKLgKy7Ymot": {
"1fWfK68EquZbmOBm3u6r": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"J6JBWi9xxTyIaZMp0RaJ": {},
"MEcHENcsxRlf2xGm5FjM": {},
"UQpzQPbPn4E0wzUdgYZn": {
"e9gedYbXCWIRyfOYlePW": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"f7S8z4EIvZvlwIywyypz": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"YQTPuymRqCXpBYjlM5r2": {},
"b9wgktbviMPFwMeYPOMo": {},
"cDAcxkPbg7FwknbppL68": {},
"e9gedYbXCWIRyfOYlePW": {},
"eQttG5ODMP8tEEpg0p6Y": {},
"hOln7gZ1yJ1JvlTF3YvO": {},
"n5wW4eYollMrcBqVR5SP": {
"EaNIkc0TZQmPD0nkGpHZ": {
"type": "input",
"input_type": "value",
"input_name": "ADD5"
},
"H93iGiPIIUKLgKy7Ymot": {
"type": "input",
"input_type": "value",
"input_name": "ADD7"
},
"J6JBWi9xxTyIaZMp0RaJ": {
"type": "input",
"input_type": "value",
"input_name": "ADD8"
},
"MEcHENcsxRlf2xGm5FjM": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
},
"UQpzQPbPn4E0wzUdgYZn": {
"type": "input",
"input_type": "value",
"input_name": "ADD3"
},
"b9wgktbviMPFwMeYPOMo": {
"type": "input",
"input_type": "value",
"input_name": "ADD4"
},
"cDAcxkPbg7FwknbppL68": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
},
"hOln7gZ1yJ1JvlTF3YvO": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
},
"s9qJGR3xHuPvvRgPDWi7": {
"type": "input",
"input_type": "value",
"input_name": "ADD6"
}
},
"s9qJGR3xHuPvvRgPDWi7": {},
"2Ldan3ULeSsMCLyIPLMQ": {},
"3FlZiPboBhWdM91VPOFR": {},
"j5F3qNBClgyOc1HUPfsK": {
"2Ldan3ULeSsMCLyIPLMQ": {
"type": "input",
"input_type": "value",
"input_name": "CHOICE1"
},
"3FlZiPboBhWdM91VPOFR": {
"type": "input",
"input_type": "value",
"input_name": "question"
},
"h3jsklDjWVwbMHOSUxJT": {
"type": "input",
"input_type": "value",
"input_name": "CHOICE0"
},
"s1rgdjTgFWQM3TGU5wd0": {
"type": "next"
}
},
"2wGZ4EBf4m0kp8Tacusg": {},
"93vOB3dnsI2N6SFz4cxf": {
"x0gWKJiOOP4io54qefca": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"9z0qSrURdwM98htRdBOb": {},
"h3jsklDjWVwbMHOSUxJT": {
"93vOB3dnsI2N6SFz4cxf": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
},
"9z0qSrURdwM98htRdBOb": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
},
"zCHW38tj1t39kZjzS1hg": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
}
},
"mENxdRebYdlXeCgziJF1": {},
"x0gWKJiOOP4io54qefca": {
"2wGZ4EBf4m0kp8Tacusg": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"mENxdRebYdlXeCgziJF1": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"zCHW38tj1t39kZjzS1hg": {},
"s1rgdjTgFWQM3TGU5wd0": {
"uranEXRRQLntEEku9d0H": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"7rxZLgmeY29jRu1E6s8I": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"0fFH6Z6HuOArIyJnANsc": {},
"uranEXRRQLntEEku9d0H": {
"ze0zZgdMkKgQQd00NVuk": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"0fFH6Z6HuOArIyJnANsc": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"ze0zZgdMkKgQQd00NVuk": {},
"tQXAhH8H3kElhi5FJJCG": {
"tkMpxFXinHlCa7WUepCz": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"2zHW1m5q03ieF2BeBEzk": {},
"K8R3g0TrA61FD3TvHOyW": {},
"f1mKf6fYCAyDfFDN5Xwe": {
"2zHW1m5q03ieF2BeBEzk": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"K8R3g0TrA61FD3TvHOyW": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"kRRMsJsRfhPcmItGcZPH": {
"f1mKf6fYCAyDfFDN5Xwe": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"TLwQumcoteQYAXPltcNq": {},
"tkMpxFXinHlCa7WUepCz": {
"TLwQumcoteQYAXPltcNq": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"kRRMsJsRfhPcmItGcZPH": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"fsUs8968UNUG4heIm8Bh": {
"sTGkbsVbvhxMqODSzB47": {
"type": "input",
"input_type": "value",
"input_name": "n"
},
"tQXAhH8H3kElhi5FJJCG": {
"type": "next"
}
},
"PnR8Cmbh2BJjCYsPxtdl": {
"egwSpQmdmBc9AvmI6vhf": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"jCs6mQ94AZRHQCJLNYoZ": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"egwSpQmdmBc9AvmI6vhf": {},
"jCs6mQ94AZRHQCJLNYoZ": {},
"sTGkbsVbvhxMqODSzB47": {
"PnR8Cmbh2BJjCYsPxtdl": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"7rxZLgmeY29jRu1E6s8I": {
"rGlsWfoFte0vM5ljLgCG": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"fsUs8968UNUG4heIm8Bh": {
"type": "next"
}
},
"Ap6Zxok9s3Rdb8gGAFBL": {
"VMNc5LnYiuB5MXc1pAoz": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"BJ11OAhBQRNb8urCibbZ": {},
"ClNARVsE5iUQyh6KkYQO": {
"GkAZtYucLu8Cpkmkm0WN": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"jcicTkrKW5HWWmHwiAf7": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"GkAZtYucLu8Cpkmkm0WN": {},
"MHQfJocgqskDETMZwmI0": {},
"PuPGhCfeFbJzl42PeTjw": {},
"VMNc5LnYiuB5MXc1pAoz": {
"BJ11OAhBQRNb8urCibbZ": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"PuPGhCfeFbJzl42PeTjw": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"WuhdJsHXij84eEHCaSMm": {},
"bBb6RbBKjWoq9YeJVMV5": {
"ClNARVsE5iUQyh6KkYQO": {
"type": "input",
"input_type": "value",
"input_name": "NUM"
}
},
"jcicTkrKW5HWWmHwiAf7": {},
"k8wU4L0kZj1ONlo10Cv1": {},
"oLaQ1ZR3CwguC2iyCMtc": {},
"rGlsWfoFte0vM5ljLgCG": {
"Ap6Zxok9s3Rdb8gGAFBL": {
"type": "input",
"input_type": "value",
"input_name": "ADD3"
},
"MHQfJocgqskDETMZwmI0": {
"type": "input",
"input_type": "value",
"input_name": "ADD4"
},
"k8wU4L0kZj1ONlo10Cv1": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
},
"oLaQ1ZR3CwguC2iyCMtc": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
},
"xzEvTmfLaZmvXjQQimIG": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
}
},
"xzEvTmfLaZmvXjQQimIG": {
"WuhdJsHXij84eEHCaSMm": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"bBb6RbBKjWoq9YeJVMV5": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"ocaHVMg2roiBjt3rveqE": {
"VUQgJBG7sPzXGeJ7T4gH": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"LizYxR6cKAgZntLqne8Z": {
"type": "next"
}
},
"f7S8z4EIvZvlwIywyypz": {},
"1Ir5pZncrjQdSVggiNv3": {
"LoJhthlJM0TqUrFjD6TS": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"rVWFUoKuedMffCwarU2E": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"LoJhthlJM0TqUrFjD6TS": {},
"V52vapDOvpd3Ia2byokD": {},
"VUQgJBG7sPzXGeJ7T4gH": {
"1Ir5pZncrjQdSVggiNv3": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
},
"V52vapDOvpd3Ia2byokD": {
"type": "input",
"input_type": "value",
"input_name": "ADD3"
},
"aZXwoMRhpgMI0ygtO1v9": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
},
"jqzDCSlsqUkigx9I3hhY": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
},
"qj1MA3RwHb60mdvyMPI0": {
"type": "input",
"input_type": "value",
"input_name": "ADD4"
}
},
"aZXwoMRhpgMI0ygtO1v9": {},
"jqzDCSlsqUkigx9I3hhY": {},
"qj1MA3RwHb60mdvyMPI0": {},
"rVWFUoKuedMffCwarU2E": {},
"SRCprhFfXEuJ3FCjX2bf": {
"SIXLgYJ5TDnyUXSFWzrK": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"MUQ890tjvLTJJyr9HZbA": {},
"SIXLgYJ5TDnyUXSFWzrK": {
"MUQ890tjvLTJJyr9HZbA": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"dcFs9II31QeOCN36kNHd": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"dcFs9II31QeOCN36kNHd": {},
"LizYxR6cKAgZntLqne8Z": {
"eIAw7wPsaLNaPOKpw23f": {
"type": "input",
"input_type": "value",
"input_name": "n"
},
"SRCprhFfXEuJ3FCjX2bf": {
"type": "next"
}
},
"eIAw7wPsaLNaPOKpw23f": {}
},
"comments": {}
}
},
{
"id": "40e752ae-2d84-47ec-baa2-e0dffaf44ec9",
"name": "使用隐身卡",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 150,
"y": 420,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "395b6e09-6d3b-4b7c-aa9e-968cb8b80924",
"costumes": {
"395b6e09-6d3b-4b7c-aa9e-968cb8b80924": {
"asset": "assets/395b6e09-6d3b-4b7c-aa9e-968cb8b80924.svg",
"name": "设置 (1)",
"pivot": {
"x": 16.36018652651586,
"y": -56.373893446093234
},
"rotateCenter": {
"x": 16.36018652651586,
"y": -56.373893446093234
}
}
},
"scripts": {
"blocks": {
"YuSRu2wjlfJwfH0vQJ2K": {
"type": "sprite_on_tap",
"id": "YuSRu2wjlfJwfH0vQJ2K",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
0
]
},
"KsrQL8gwPne4lo7RYbx7": {
"type": "controls_if",
"id": "KsrQL8gwPne4lo7RYbx7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
513.5553588867188
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"LVX83B2mpxhfQWmRYaSX\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "YuSRu2wjlfJwfH0vQJ2K"
},
"81saPZfLYCV4gvVn7RRO": {
"type": "cloud_variables_get",
"id": "81saPZfLYCV4gvVn7RRO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
117.77777862548828,
599.7755737304688
],
"parent_id": "X49hKxcRza8rKovREKam"
},
"X49hKxcRza8rKovREKam": {
"type": "logic_compare",
"id": "X49hKxcRza8rKovREKam",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"AoV9opRCh6o27kDzXqGZ\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"lIlJ2zlWn3RtAhzNO5iB\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
141.11111450195312,
703.5553588867188
],
"parent_id": "KsrQL8gwPne4lo7RYbx7"
},
"lIlJ2zlWn3RtAhzNO5iB": {
"type": "math_number",
"id": "lIlJ2zlWn3RtAhzNO5iB",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "X49hKxcRza8rKovREKam"
},
"DqmUB8bBvWTzFfBExQSQ": {
"type": "show_hide_variable",
"id": "DqmUB8bBvWTzFfBExQSQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
357.9982604980469
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "KsrQL8gwPne4lo7RYbx7"
},
"exVBoktS3fWX4KHRpMb7": {
"type": "variables_set",
"id": "exVBoktS3fWX4KHRpMb7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
251.33157348632812
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"xca8Zc1TjCMaB1LWX4N7\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DqmUB8bBvWTzFfBExQSQ"
},
"xca8Zc1TjCMaB1LWX4N7": {
"type": "math_number",
"id": "xca8Zc1TjCMaB1LWX4N7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你目前还没有隐身卡哦，可以去商店购买"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "exVBoktS3fWX4KHRpMb7"
},
"Eg8uw3DJxEwMxS5uQ3qf": {
"type": "math_number",
"id": "Eg8uw3DJxEwMxS5uQ3qf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "uTcHLf35FJ7gedlgwAVL"
},
"uTcHLf35FJ7gedlgwAVL": {
"type": "wait",
"id": "uTcHLf35FJ7gedlgwAVL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
703.5553588867188
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Eg8uw3DJxEwMxS5uQ3qf\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "exVBoktS3fWX4KHRpMb7"
},
"Hz56pKHpiF2RrClWggv9": {
"type": "show_hide_variable",
"id": "Hz56pKHpiF2RrClWggv9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
357.9982604980469
],
"shadows": {},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897",
"FUNC": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "uTcHLf35FJ7gedlgwAVL"
},
"a9xyot6Q76SQ2sVKVUaf": {
"type": "change_cloud_variable",
"id": "a9xyot6Q76SQ2sVKVUaf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
349.1089172363281
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"sYN95nQUyWpC6VxMRzDY\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "75cbf2e5-8310-4c54-b3c5-1002a25d4685",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "KsrQL8gwPne4lo7RYbx7"
},
"sYN95nQUyWpC6VxMRzDY": {
"type": "math_number",
"id": "sYN95nQUyWpC6VxMRzDY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "a9xyot6Q76SQ2sVKVUaf"
},
"1ZDi8cvej66OpbXmPfIH": {
"type": "math_number",
"id": "1ZDi8cvej66OpbXmPfIH",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你使用了隐身卡，将会隐身10秒"
},
"field_constraints": {
"TEXT": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "RNM79jjwCMD4Gj8we757"
},
"HpCkuNfcnSlmWTM543l8": {
"type": "show_hide_variable",
"id": "HpCkuNfcnSlmWTM543l8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "g4esKSKKgTvzNUrHyrOY"
},
"RNM79jjwCMD4Gj8we757": {
"type": "variables_set",
"id": "RNM79jjwCMD4Gj8we757",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"1ZDi8cvej66OpbXmPfIH\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"TEXT\">你目前还没有隐身卡哦，可以去商店购买</field></shadow>"
},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "zo3p7wagZPMM0mH6Jdpv"
},
"g4esKSKKgTvzNUrHyrOY": {
"type": "wait",
"id": "g4esKSKKgTvzNUrHyrOY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"sn2fMiqz42QjJ5c4OOEi\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">3</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "HTrkX68fNwcXn8yBLKDY"
},
"sn2fMiqz42QjJ5c4OOEi": {
"type": "math_number",
"id": "sn2fMiqz42QjJ5c4OOEi",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "g4esKSKKgTvzNUrHyrOY"
},
"zo3p7wagZPMM0mH6Jdpv": {
"type": "show_hide_variable",
"id": "zo3p7wagZPMM0mH6Jdpv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
168,
515
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Wf5q5VTEu9ahax5Ltd6P"
},
"Wf5q5VTEu9ahax5Ltd6P": {
"type": "self_broadcast",
"id": "Wf5q5VTEu9ahax5Ltd6P",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"WzmESgfsSyQZiqul6yVk\" visible=\"visible\"><field name=\"MESSAGE\">Hi</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
130,
368.6663818359375
],
"parent_id": "a9xyot6Q76SQ2sVKVUaf"
},
"WzmESgfsSyQZiqul6yVk": {
"type": "broadcast_input",
"id": "WzmESgfsSyQZiqul6yVk",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐身"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Wf5q5VTEu9ahax5Ltd6P"
},
"2EsReIYwG3B6wOAeSdfh": {
"type": "logic_compare",
"id": "2EsReIYwG3B6wOAeSdfh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"6p9F2l4b41pTTRRwVsdb\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"eSgM88Sruz6SQKSPqmda\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">539843282</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "kHrJcIDnCu0nDjWrTPKL"
},
"EbQzOKulHy5MzCBlA2De": {
"type": "on_keydown",
"id": "EbQzOKulHy5MzCBlA2De",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
668
]
},
"IaP8bwKSjMb4JqChKehU": {
"type": "get_answer",
"id": "IaP8bwKSjMb4JqChKehU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "effv95Iz8SSdEnk7bzaV"
},
"eSgM88Sruz6SQKSPqmda": {
"type": "math_number",
"id": "eSgM88Sruz6SQKSPqmda",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "2EsReIYwG3B6wOAeSdfh"
},
"effv95Iz8SSdEnk7bzaV": {
"type": "change_cloud_variable",
"id": "effv95Iz8SSdEnk7bzaV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"LqUbijmghudA2AoOVrIg\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "rgDOWfYsXLy7SqdjnYwx"
},
"kHrJcIDnCu0nDjWrTPKL": {
"type": "controls_if",
"id": "kHrJcIDnCu0nDjWrTPKL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"PWV2U0M1h9LXODOGm5Rr\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "EbQzOKulHy5MzCBlA2De"
},
"oJyPi6axHlr3QQcUzGqd": {
"type": "user_id_get",
"id": "oJyPi6axHlr3QQcUzGqd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "2EsReIYwG3B6wOAeSdfh"
},
"rgDOWfYsXLy7SqdjnYwx": {
"type": "self_ask",
"id": "rgDOWfYsXLy7SqdjnYwx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"xVS7nr5Peof3YTITpHZ3\" visible=\"visible\"><field name=\"TEXT\">请输入开发者模式要多少个金币：</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "kHrJcIDnCu0nDjWrTPKL"
},
"xVS7nr5Peof3YTITpHZ3": {
"type": "text",
"id": "xVS7nr5Peof3YTITpHZ3",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rgDOWfYsXLy7SqdjnYwx"
},
"bSQeKEms6TtTOpXMCzBU": {
"type": "self_disappear",
"id": "bSQeKEms6TtTOpXMCzBU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
130,
499.777587890625
],
"parent_id": "RNM79jjwCMD4Gj8we757"
},
"ETggCbwTe7ofZnzEU2SV": {
"type": "broadcast_input",
"id": "ETggCbwTe7ofZnzEU2SV",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐身结束"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZZEQv0rfNM17y8NN1OHC"
},
"ZZEQv0rfNM17y8NN1OHC": {
"type": "self_listen",
"id": "ZZEQv0rfNM17y8NN1OHC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"ETggCbwTe7ofZnzEU2SV\" visible=\"visible\"><field name=\"MESSAGE\">隐身结束</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
906
]
},
"GAKLzUzJVYaR2d1NrzOH": {
"type": "self_appear",
"id": "GAKLzUzJVYaR2d1NrzOH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
187.5553741455078
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ZZEQv0rfNM17y8NN1OHC"
},
"HTrkX68fNwcXn8yBLKDY": {
"type": "set_entity_show_hide",
"id": "HTrkX68fNwcXn8yBLKDY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"TYPE": ""
},
"fields": {
"sprite": "bd37bfc9-c9ad-4e60-9ff1-489304f3d3d5",
"type": "show"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"location": [
134.44444274902344,
534.2220458984375
],
"parent_id": "bSQeKEms6TtTOpXMCzBU"
},
"K0OQOeBbb8BoIbRPfUeP": {
"type": "set_entity_show_hide",
"id": "K0OQOeBbb8BoIbRPfUeP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
32.22222137451172,
485.3331604003906
],
"shadows": {
"TYPE": ""
},
"fields": {
"type": "hide",
"sprite": "bd37bfc9-c9ad-4e60-9ff1-489304f3d3d5"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"parent_id": "GAKLzUzJVYaR2d1NrzOH"
},
"0ymKT3xp5wxFX2Ytoe1A": {
"type": "self_listen",
"id": "0ymKT3xp5wxFX2Ytoe1A",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"k7qiGkY0Vu8QCVH9YCYm\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
33.33333206176758,
1332.6666259765625
]
},
"k7qiGkY0Vu8QCVH9YCYm": {
"type": "broadcast_input",
"id": "k7qiGkY0Vu8QCVH9YCYm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "0ymKT3xp5wxFX2Ytoe1A"
},
"6xNKUfS4jSXKsiLaXLzN": {
"type": "self_disappear",
"id": "6xNKUfS4jSXKsiLaXLzN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
32.222206115722656,
1125.5550537109375
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "0ymKT3xp5wxFX2Ytoe1A"
},
"D7wiodPnH1nT8o9Cbz1F": {
"type": "self_listen",
"id": "D7wiodPnH1nT8o9Cbz1F",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"dWm0Omkt5ofvXyUckW9M\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
1066
]
},
"aXiNtKwudp5ILJAklsHj": {
"type": "self_appear",
"id": "aXiNtKwudp5ILJAklsHj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
157.7777862548828,
1149.777587890625
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "D7wiodPnH1nT8o9Cbz1F"
},
"dWm0Omkt5ofvXyUckW9M": {
"type": "broadcast_input",
"id": "dWm0Omkt5ofvXyUckW9M",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "D7wiodPnH1nT8o9Cbz1F"
},
"075WxJtBwEjBtL5ZfLnV": {
"type": "on_keydown",
"id": "075WxJtBwEjBtL5ZfLnV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "89"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
65.33332824707031,
1252.6666259765625
]
},
"16FzRpiJoYQBeOsnq6dm": {
"type": "math_number",
"id": "16FzRpiJoYQBeOsnq6dm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "wZyGAL2coO7yOe7KiKs0"
},
"7y3zclZjpTsk1YDKX6Jz": {
"type": "self_disappear",
"id": "7y3zclZjpTsk1YDKX6Jz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "SOuZWDJ6FvNI3JhEvazh"
},
"8CXetZaEK4qd1ktXGTyS": {
"type": "cloud_variables_get",
"id": "8CXetZaEK4qd1ktXGTyS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "O9ici8otswErXbONeJ4j"
},
"Fm3icefqFcFOzowfwxtQ": {
"type": "wait",
"id": "Fm3icefqFcFOzowfwxtQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XgbORRAde9CbvTZooZCR\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">3</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "auiDdw1odVcQkJdPBWO4"
},
"HkcGe5qYQxa6F7sQVV3K": {
"type": "math_number",
"id": "HkcGe5qYQxa6F7sQVV3K",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "O9ici8otswErXbONeJ4j"
},
"O9ici8otswErXbONeJ4j": {
"type": "logic_compare",
"id": "O9ici8otswErXbONeJ4j",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XaFRWXgntiFlbj0mxufK\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"HkcGe5qYQxa6F7sQVV3K\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GT"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qP9CRDK0VQd5DReoKcfS"
},
"PvcM80I2pOBThmjvu4FJ": {
"type": "show_hide_variable",
"id": "PvcM80I2pOBThmjvu4FJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "wZyGAL2coO7yOe7KiKs0"
},
"SOuZWDJ6FvNI3JhEvazh": {
"type": "variables_set",
"id": "SOuZWDJ6FvNI3JhEvazh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"f8ISd1yv5XM8nCTsEkPw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"TEXT\">你使用了隐身卡，将会隐身10秒</field></shadow>"
},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "x4MwthC5TeFgVfYQMHNs"
},
"VqljDmEeCyqg0zbnOF8b": {
"type": "show_hide_variable",
"id": "VqljDmEeCyqg0zbnOF8b",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "qP9CRDK0VQd5DReoKcfS"
},
"XgbORRAde9CbvTZooZCR": {
"type": "math_number",
"id": "XgbORRAde9CbvTZooZCR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Fm3icefqFcFOzowfwxtQ"
},
"YNfDbP30cAcC3E5LVo4b": {
"type": "change_cloud_variable",
"id": "YNfDbP30cAcC3E5LVo4b",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"wm8aUYMD3MIlQIFtsbql\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "75cbf2e5-8310-4c54-b3c5-1002a25d4685",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "qP9CRDK0VQd5DReoKcfS"
},
"auiDdw1odVcQkJdPBWO4": {
"type": "variables_set",
"id": "auiDdw1odVcQkJdPBWO4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"t9tzGDrXyhnhzM0PeqHT\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"TEXT\">你目前还没有隐身卡哦，可以去商店购买</field></shadow>"
},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "VqljDmEeCyqg0zbnOF8b"
},
"cRIyo5C5LH6pIHi589hz": {
"type": "broadcast_input",
"id": "cRIyo5C5LH6pIHi589hz",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐身"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vDGexs3K7vwcno33vasS"
},
"f8ISd1yv5XM8nCTsEkPw": {
"type": "math_number",
"id": "f8ISd1yv5XM8nCTsEkPw",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你使用了隐身卡，将会隐身10秒"
},
"field_constraints": {
"TEXT": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "SOuZWDJ6FvNI3JhEvazh"
},
"qP9CRDK0VQd5DReoKcfS": {
"type": "controls_if",
"id": "qP9CRDK0VQd5DReoKcfS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"Znb95hgJLtg3p90ZIZ3o\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
360.4444580078125,
860.888916015625
],
"parent_id": "075WxJtBwEjBtL5ZfLnV"
},
"szSFVZqGMqMliTgXvCiR": {
"type": "show_hide_variable",
"id": "szSFVZqGMqMliTgXvCiR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Fm3icefqFcFOzowfwxtQ"
},
"t9tzGDrXyhnhzM0PeqHT": {
"type": "math_number",
"id": "t9tzGDrXyhnhzM0PeqHT",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你目前还没有隐身卡哦，可以去商店购买"
},
"field_constraints": {
"TEXT": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "auiDdw1odVcQkJdPBWO4"
},
"touIHTmCLRcHSRriV4Nx": {
"type": "set_entity_show_hide",
"id": "touIHTmCLRcHSRriV4Nx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"TYPE": ""
},
"fields": {
"sprite": "bd37bfc9-c9ad-4e60-9ff1-489304f3d3d5",
"type": "show"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"parent_id": "7y3zclZjpTsk1YDKX6Jz"
},
"vDGexs3K7vwcno33vasS": {
"type": "self_broadcast",
"id": "vDGexs3K7vwcno33vasS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"cRIyo5C5LH6pIHi589hz\" visible=\"visible\"><field name=\"MESSAGE\">隐身</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "YNfDbP30cAcC3E5LVo4b"
},
"wZyGAL2coO7yOe7KiKs0": {
"type": "wait",
"id": "wZyGAL2coO7yOe7KiKs0",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"16FzRpiJoYQBeOsnq6dm\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">3</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "touIHTmCLRcHSRriV4Nx"
},
"wm8aUYMD3MIlQIFtsbql": {
"type": "math_number",
"id": "wm8aUYMD3MIlQIFtsbql",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YNfDbP30cAcC3E5LVo4b"
},
"x4MwthC5TeFgVfYQMHNs": {
"type": "show_hide_variable",
"id": "x4MwthC5TeFgVfYQMHNs",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "vDGexs3K7vwcno33vasS"
}
},
"connections": {
"YuSRu2wjlfJwfH0vQJ2K": {
"KsrQL8gwPne4lo7RYbx7": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"KsrQL8gwPne4lo7RYbx7": {
"X49hKxcRza8rKovREKam": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"DqmUB8bBvWTzFfBExQSQ": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"a9xyot6Q76SQ2sVKVUaf": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"81saPZfLYCV4gvVn7RRO": {},
"X49hKxcRza8rKovREKam": {
"lIlJ2zlWn3RtAhzNO5iB": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"81saPZfLYCV4gvVn7RRO": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"lIlJ2zlWn3RtAhzNO5iB": {},
"DqmUB8bBvWTzFfBExQSQ": {
"exVBoktS3fWX4KHRpMb7": {
"type": "next"
}
},
"exVBoktS3fWX4KHRpMb7": {
"xca8Zc1TjCMaB1LWX4N7": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"uTcHLf35FJ7gedlgwAVL": {
"type": "next"
}
},
"xca8Zc1TjCMaB1LWX4N7": {},
"Eg8uw3DJxEwMxS5uQ3qf": {},
"uTcHLf35FJ7gedlgwAVL": {
"Eg8uw3DJxEwMxS5uQ3qf": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"Hz56pKHpiF2RrClWggv9": {
"type": "next"
}
},
"Hz56pKHpiF2RrClWggv9": {},
"a9xyot6Q76SQ2sVKVUaf": {
"sYN95nQUyWpC6VxMRzDY": {
"type": "input",
"input_type": "value",
"input_name": "n"
},
"Wf5q5VTEu9ahax5Ltd6P": {
"type": "next"
}
},
"sYN95nQUyWpC6VxMRzDY": {},
"1ZDi8cvej66OpbXmPfIH": {},
"HpCkuNfcnSlmWTM543l8": {},
"RNM79jjwCMD4Gj8we757": {
"1ZDi8cvej66OpbXmPfIH": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"bSQeKEms6TtTOpXMCzBU": {
"type": "next"
}
},
"g4esKSKKgTvzNUrHyrOY": {
"HpCkuNfcnSlmWTM543l8": {
"type": "next"
},
"sn2fMiqz42QjJ5c4OOEi": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"sn2fMiqz42QjJ5c4OOEi": {},
"zo3p7wagZPMM0mH6Jdpv": {
"RNM79jjwCMD4Gj8we757": {
"type": "next"
}
},
"Wf5q5VTEu9ahax5Ltd6P": {
"WzmESgfsSyQZiqul6yVk": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"zo3p7wagZPMM0mH6Jdpv": {
"type": "next"
}
},
"WzmESgfsSyQZiqul6yVk": {},
"2EsReIYwG3B6wOAeSdfh": {
"eSgM88Sruz6SQKSPqmda": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"oJyPi6axHlr3QQcUzGqd": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"EbQzOKulHy5MzCBlA2De": {
"kHrJcIDnCu0nDjWrTPKL": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"IaP8bwKSjMb4JqChKehU": {},
"eSgM88Sruz6SQKSPqmda": {},
"effv95Iz8SSdEnk7bzaV": {
"IaP8bwKSjMb4JqChKehU": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"kHrJcIDnCu0nDjWrTPKL": {
"2EsReIYwG3B6wOAeSdfh": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"rgDOWfYsXLy7SqdjnYwx": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"oJyPi6axHlr3QQcUzGqd": {},
"rgDOWfYsXLy7SqdjnYwx": {
"effv95Iz8SSdEnk7bzaV": {
"type": "next"
},
"xVS7nr5Peof3YTITpHZ3": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"xVS7nr5Peof3YTITpHZ3": {},
"bSQeKEms6TtTOpXMCzBU": {
"HTrkX68fNwcXn8yBLKDY": {
"type": "next"
}
},
"ETggCbwTe7ofZnzEU2SV": {},
"ZZEQv0rfNM17y8NN1OHC": {
"ETggCbwTe7ofZnzEU2SV": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"GAKLzUzJVYaR2d1NrzOH": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"GAKLzUzJVYaR2d1NrzOH": {
"K0OQOeBbb8BoIbRPfUeP": {
"type": "next"
}
},
"HTrkX68fNwcXn8yBLKDY": {
"g4esKSKKgTvzNUrHyrOY": {
"type": "next"
}
},
"K0OQOeBbb8BoIbRPfUeP": {},
"0ymKT3xp5wxFX2Ytoe1A": {
"k7qiGkY0Vu8QCVH9YCYm": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"6xNKUfS4jSXKsiLaXLzN": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"k7qiGkY0Vu8QCVH9YCYm": {},
"6xNKUfS4jSXKsiLaXLzN": {},
"D7wiodPnH1nT8o9Cbz1F": {
"aXiNtKwudp5ILJAklsHj": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"dWm0Omkt5ofvXyUckW9M": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"aXiNtKwudp5ILJAklsHj": {},
"dWm0Omkt5ofvXyUckW9M": {},
"075WxJtBwEjBtL5ZfLnV": {
"qP9CRDK0VQd5DReoKcfS": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"16FzRpiJoYQBeOsnq6dm": {},
"7y3zclZjpTsk1YDKX6Jz": {
"touIHTmCLRcHSRriV4Nx": {
"type": "next"
}
},
"8CXetZaEK4qd1ktXGTyS": {},
"Fm3icefqFcFOzowfwxtQ": {
"XgbORRAde9CbvTZooZCR": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"szSFVZqGMqMliTgXvCiR": {
"type": "next"
}
},
"HkcGe5qYQxa6F7sQVV3K": {},
"O9ici8otswErXbONeJ4j": {
"8CXetZaEK4qd1ktXGTyS": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"HkcGe5qYQxa6F7sQVV3K": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"PvcM80I2pOBThmjvu4FJ": {},
"SOuZWDJ6FvNI3JhEvazh": {
"7y3zclZjpTsk1YDKX6Jz": {
"type": "next"
},
"f8ISd1yv5XM8nCTsEkPw": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"VqljDmEeCyqg0zbnOF8b": {
"auiDdw1odVcQkJdPBWO4": {
"type": "next"
}
},
"XgbORRAde9CbvTZooZCR": {},
"YNfDbP30cAcC3E5LVo4b": {
"vDGexs3K7vwcno33vasS": {
"type": "next"
},
"wm8aUYMD3MIlQIFtsbql": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"auiDdw1odVcQkJdPBWO4": {
"Fm3icefqFcFOzowfwxtQ": {
"type": "next"
},
"t9tzGDrXyhnhzM0PeqHT": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"cRIyo5C5LH6pIHi589hz": {},
"f8ISd1yv5XM8nCTsEkPw": {},
"qP9CRDK0VQd5DReoKcfS": {
"O9ici8otswErXbONeJ4j": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"VqljDmEeCyqg0zbnOF8b": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"YNfDbP30cAcC3E5LVo4b": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"szSFVZqGMqMliTgXvCiR": {},
"t9tzGDrXyhnhzM0PeqHT": {},
"touIHTmCLRcHSRriV4Nx": {
"wZyGAL2coO7yOe7KiKs0": {
"type": "next"
}
},
"vDGexs3K7vwcno33vasS": {
"cRIyo5C5LH6pIHi589hz": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"x4MwthC5TeFgVfYQMHNs": {
"type": "next"
}
},
"wZyGAL2coO7yOe7KiKs0": {
"16FzRpiJoYQBeOsnq6dm": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"PvcM80I2pOBThmjvu4FJ": {
"type": "next"
}
},
"wm8aUYMD3MIlQIFtsbql": {},
"x4MwthC5TeFgVfYQMHNs": {
"SOuZWDJ6FvNI3JhEvazh": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "1107e260-8398-4af2-9dbf-bef371140ab5",
"name": "返回(1)",
"scene": "e0467d63-e28c-4ace-a939-fc75e93c5080",
"x": -276.8070997084476,
"y": -421.0650558713826,
"scale": 10,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "77078571-337c-4d50-bcf1-dc8e0e65f0ac",
"costumes": {
"77078571-337c-4d50-bcf1-dc8e0e65f0ac": {
"asset": "assets/77078571-337c-4d50-bcf1-dc8e0e65f0ac.svg",
"name": "返回",
"pivot": {
"x": 16.535291565304647,
"y": 43.131036246155986
},
"rotateCenter": {
"x": 16.535291565304647,
"y": 43.131036246155986
}
}
},
"scripts": {
"blocks": {
"JKbxiS3FHGc9XHc2LMTf": {
"type": "sprite_on_tap",
"id": "JKbxiS3FHGc9XHc2LMTf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
112.22222137451172,
184.22201538085938
]
},
"GS2qZ5CSJQsLn6gixusT": {
"type": "get_current_scene",
"id": "GS2qZ5CSJQsLn6gixusT",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Y4p0o41SYcFONWi4JfIJ"
},
"Y4p0o41SYcFONWi4JfIJ": {
"type": "switch_to_screen",
"id": "Y4p0o41SYcFONWi4JfIJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
97.55536651611328
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"GS2qZ5CSJQsLn6gixusT\" visible=\"visible\" inline=\"true\"><field name=\"scene\">6e4bbd50-f319-4c3e-ba74-4017c364a7c5</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "JKbxiS3FHGc9XHc2LMTf"
},
"4bV2zKgWgUVTAlCKy2mr": {
"type": "text",
"id": "4bV2zKgWgUVTAlCKy2mr",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "x0WazNtObTrI7zwIOwG7"
},
"A3D93STkgiC72UxOCOzH": {
"type": "user_id_get",
"id": "A3D93STkgiC72UxOCOzH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vGLkQE7kuowFP5TtERJ4"
},
"QOw2y7a4uZWhLVFAE8fP": {
"type": "get_answer",
"id": "QOw2y7a4uZWhLVFAE8fP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "hQvclG2g46toO7CeU1kF"
},
"U5YXtdFvey34Lu8K1Nj1": {
"type": "on_keydown",
"id": "U5YXtdFvey34Lu8K1Nj1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
286.9444274902344,
277.77777099609375
],
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"hQvclG2g46toO7CeU1kF": {
"type": "change_cloud_variable",
"id": "hQvclG2g46toO7CeU1kF",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"q1KTkkqYgDnqg8X8SiWf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "x0WazNtObTrI7zwIOwG7"
},
"pWbsVK95LSfummcbTYry": {
"type": "math_number",
"id": "pWbsVK95LSfummcbTYry",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vGLkQE7kuowFP5TtERJ4"
},
"q1a4UbWMKgyTu8lBRiWs": {
"type": "controls_if",
"id": "q1a4UbWMKgyTu8lBRiWs",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"MF2aZLbmQSJeuNqJMO1e\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "U5YXtdFvey34Lu8K1Nj1"
},
"vGLkQE7kuowFP5TtERJ4": {
"type": "logic_compare",
"id": "vGLkQE7kuowFP5TtERJ4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"d5SRoYDDE2w7sxqGJCh6\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"pWbsVK95LSfummcbTYry\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">539843282</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "q1a4UbWMKgyTu8lBRiWs"
},
"x0WazNtObTrI7zwIOwG7": {
"type": "self_ask",
"id": "x0WazNtObTrI7zwIOwG7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"4bV2zKgWgUVTAlCKy2mr\" visible=\"visible\"><field name=\"TEXT\">请输入开发者模式要多少个金币：</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "q1a4UbWMKgyTu8lBRiWs"
}
},
"connections": {
"JKbxiS3FHGc9XHc2LMTf": {
"Y4p0o41SYcFONWi4JfIJ": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"GS2qZ5CSJQsLn6gixusT": {},
"Y4p0o41SYcFONWi4JfIJ": {
"GS2qZ5CSJQsLn6gixusT": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"4bV2zKgWgUVTAlCKy2mr": {},
"A3D93STkgiC72UxOCOzH": {},
"QOw2y7a4uZWhLVFAE8fP": {},
"U5YXtdFvey34Lu8K1Nj1": {
"q1a4UbWMKgyTu8lBRiWs": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"hQvclG2g46toO7CeU1kF": {
"QOw2y7a4uZWhLVFAE8fP": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"pWbsVK95LSfummcbTYry": {},
"q1a4UbWMKgyTu8lBRiWs": {
"vGLkQE7kuowFP5TtERJ4": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"x0WazNtObTrI7zwIOwG7": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"vGLkQE7kuowFP5TtERJ4": {
"A3D93STkgiC72UxOCOzH": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"pWbsVK95LSfummcbTYry": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"x0WazNtObTrI7zwIOwG7": {
"4bV2zKgWgUVTAlCKy2mr": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"hQvclG2g46toO7CeU1kF": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "bd37bfc9-c9ad-4e60-9ff1-489304f3d3d5",
"name": "使用中",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 280,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": false,
"draggable": false,
"currentStyleId": "7d7fb5b5-c8d5-44a8-836d-0db5d282c44f",
"costumes": {
"7d7fb5b5-c8d5-44a8-836d-0db5d282c44f": {
"asset": "assets/7d7fb5b5-c8d5-44a8-836d-0db5d282c44f.svg",
"name": "设置 (1)",
"pivot": {
"x": -5.298459660437743,
"y": -56.373893446093234
},
"rotateCenter": {
"x": -5.298459660437743,
"y": -56.373893446093234
}
}
},
"scripts": {
"blocks": {
"rvQ5FHkvMldkZa4OIidt": {
"type": "sprite_on_tap",
"id": "rvQ5FHkvMldkZa4OIidt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
95.55555725097656,
210.88868713378906
]
},
"R6hPEiK5lUROgJznWrzj": {
"type": "math_number",
"id": "R6hPEiK5lUROgJznWrzj",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "你已经在隐身啦 隐身结束后才能再次隐身哦"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "czpOCo2UYa1iSWnPXfsL"
},
"czpOCo2UYa1iSWnPXfsL": {
"type": "variables_set",
"id": "czpOCo2UYa1iSWnPXfsL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
302.442138671875
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"R6hPEiK5lUROgJznWrzj\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "rvQ5FHkvMldkZa4OIidt"
},
"18lv3sAdAPtYnvxSXfIG": {
"type": "show_hide_variable",
"id": "18lv3sAdAPtYnvxSXfIG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
409.1088562011719
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "czpOCo2UYa1iSWnPXfsL"
},
"6CLziFtiNmMVWLXHWEcX": {
"type": "wait",
"id": "6CLziFtiNmMVWLXHWEcX",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
703.5553588867188
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"MYwvuWgunniC7gWjGX7o\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "18lv3sAdAPtYnvxSXfIG"
},
"MYwvuWgunniC7gWjGX7o": {
"type": "math_number",
"id": "MYwvuWgunniC7gWjGX7o",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "6CLziFtiNmMVWLXHWEcX"
},
"DN5DH876CjdsaEfc4EIb": {
"type": "show_hide_variable",
"id": "DN5DH876CjdsaEfc4EIb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
409.1088562011719
],
"shadows": {},
"fields": {
"VAR": "ac1b842c-534d-4e66-9cb4-b76ec99db897",
"FUNC": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "6CLziFtiNmMVWLXHWEcX"
}
},
"connections": {
"rvQ5FHkvMldkZa4OIidt": {
"czpOCo2UYa1iSWnPXfsL": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"R6hPEiK5lUROgJznWrzj": {},
"czpOCo2UYa1iSWnPXfsL": {
"R6hPEiK5lUROgJznWrzj": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"18lv3sAdAPtYnvxSXfIG": {
"type": "next"
}
},
"18lv3sAdAPtYnvxSXfIG": {
"6CLziFtiNmMVWLXHWEcX": {
"type": "next"
}
},
"6CLziFtiNmMVWLXHWEcX": {
"MYwvuWgunniC7gWjGX7o": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"DN5DH876CjdsaEfc4EIb": {
"type": "next"
}
},
"MYwvuWgunniC7gWjGX7o": {},
"DN5DH876CjdsaEfc4EIb": {}
},
"comments": {}
}
},
{
"id": "60081dcd-58c1-467a-9d2c-5f877a3744bb",
"name": "新角色(5)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": 200,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "8dec73bf-d367-4d26-be62-72326a69d28a",
"costumes": {
"8dec73bf-d367-4d26-be62-72326a69d28a": {
"asset": "assets/8dec73bf-d367-4d26-be62-72326a69d28a.svg",
"name": "新角色(4)",
"pivot": {
"x": 0.44529122340431826,
"y": 0.4444561170213319
},
"rotateCenter": {
"x": 0.44529122340431826,
"y": 0.4444561170213319
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "4930be4f-31c6-46fa-af90-a96a505137dd",
"name": "新角色(6)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -195,
"y": 154.14364640883974,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "bf4d2b4a-77b8-4ec6-9dc0-35eabb42d3b9",
"costumes": {
"bf4d2b4a-77b8-4ec6-9dc0-35eabb42d3b9": {
"asset": "assets/bf4d2b4a-77b8-4ec6-9dc0-35eabb42d3b9.svg",
"name": "新角色(6)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"SN92EVNOQq27rQQS20ox": {
"type": "on_running_group_activated",
"id": "SN92EVNOQq27rQQS20ox",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
143.33334350585938,
114.22203063964844
]
},
"LWJjlYd1l4rIfChLcqnP": {
"type": "show_hide_variable",
"id": "LWJjlYd1l4rIfChLcqnP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
460.2194519042969
],
"shadows": {},
"fields": {
"FUNC": "show",
"VAR": "7b160e91-8427-47d2-9168-15b00a7a8fc2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "SN92EVNOQq27rQQS20ox"
}
},
"connections": {
"SN92EVNOQq27rQQS20ox": {
"LWJjlYd1l4rIfChLcqnP": {
"type": "next"
}
},
"LWJjlYd1l4rIfChLcqnP": {}
},
"comments": {}
}
},
{
"id": "f4e4b9bd-36d1-41de-8fb1-a933a43359cb",
"name": "修改",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -270,
"y": 105,
"scale": 10,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "8d449f78-e76b-43fe-a0b8-f35189771255",
"costumes": {
"8d449f78-e76b-43fe-a0b8-f35189771255": {
"asset": "assets/8d449f78-e76b-43fe-a0b8-f35189771255.svg",
"name": "返回",
"pivot": {
"x": 16.535291565304647,
"y": 43.13103624615587
},
"rotateCenter": {
"x": 16.535291565304647,
"y": 43.13103624615587
}
}
},
"scripts": {
"blocks": {
"fnNAuYOroFxo8MAfkx18": {
"type": "sprite_on_tap",
"id": "fnNAuYOroFxo8MAfkx18",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
117.77777862548828,
235.3331298828125
]
},
"COsk25GKLEfDFiLvWwho": {
"type": "text",
"id": "COsk25GKLEfDFiLvWwho",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入要将方块特效修改到多少："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "kXkh68gbpghBdZmlnlyt"
},
"kXkh68gbpghBdZmlnlyt": {
"type": "self_ask",
"id": "kXkh68gbpghBdZmlnlyt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
634.2220458984375
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"COsk25GKLEfDFiLvWwho\" visible=\"visible\"><field name=\"TEXT\">你的名字</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "fnNAuYOroFxo8MAfkx18"
},
"EhZnnoEdezhfRi1cWEVa": {
"type": "variables_set",
"id": "EhZnnoEdezhfRi1cWEVa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
353.55279541015625
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"X4c01rGmwT4AgOZbQJ6o\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "7b160e91-8427-47d2-9168-15b00a7a8fc2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "kXkh68gbpghBdZmlnlyt"
},
"9qvpq1Xp5LSgn1EUrJJK": {
"type": "get_answer",
"id": "9qvpq1Xp5LSgn1EUrJJK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
687.555419921875
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EhZnnoEdezhfRi1cWEVa"
},
"orawqrnc0Qr2j9J2n7nU": {
"type": "text",
"id": "orawqrnc0Qr2j9J2n7nU",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "修改成功"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "yT4BJmq4vGeBMlPedG5q"
},
"yT4BJmq4vGeBMlPedG5q": {
"type": "create_stage_dialog",
"id": "yT4BJmq4vGeBMlPedG5q",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
437.55535888671875
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"orawqrnc0Qr2j9J2n7nU\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "EhZnnoEdezhfRi1cWEVa"
}
},
"connections": {
"fnNAuYOroFxo8MAfkx18": {
"kXkh68gbpghBdZmlnlyt": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"COsk25GKLEfDFiLvWwho": {},
"kXkh68gbpghBdZmlnlyt": {
"COsk25GKLEfDFiLvWwho": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"EhZnnoEdezhfRi1cWEVa": {
"type": "next"
}
},
"EhZnnoEdezhfRi1cWEVa": {
"9qvpq1Xp5LSgn1EUrJJK": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"yT4BJmq4vGeBMlPedG5q": {
"type": "next"
}
},
"9qvpq1Xp5LSgn1EUrJJK": {},
"orawqrnc0Qr2j9J2n7nU": {},
"yT4BJmq4vGeBMlPedG5q": {
"orawqrnc0Qr2j9J2n7nU": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
}
},
"comments": {}
}
},
{
"id": "877c8850-5ab5-4c01-9177-aa2ee48a382a",
"name": "新角色(7)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": 50,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "1e4dd6a0-b4fc-4187-9984-e2c3028d24ed",
"costumes": {
"1e4dd6a0-b4fc-4187-9984-e2c3028d24ed": {
"asset": "assets/1e4dd6a0-b4fc-4187-9984-e2c3028d24ed.svg",
"name": "新角色(4)",
"pivot": {
"x": -212.34785106382935,
"y": 0.18659441489370465
},
"rotateCenter": {
"x": -212.34785106382935,
"y": 0.18659441489370465
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "f362b41d-b872-4061-af6e-0564681cc034",
"name": "女孩",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -150,
"y": -17,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "746678d6-d066-4052-9e86-527cddbdb4e3",
"costumes": {
"746678d6-d066-4052-9e86-527cddbdb4e3": {
"asset": "assets/746678d6-d066-4052-9e86-527cddbdb4e3.png",
"name": "女孩（1）",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"BP7MdO9koYRvbrQBV3Qc": {
"type": "sprite_on_tap",
"id": "BP7MdO9koYRvbrQBV3Qc",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
157.77777099609375,
261.99981689453125
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"GWu0kddIoSHYKC7ZYLBH": {
"type": "variables_set",
"id": "GWu0kddIoSHYKC7ZYLBH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
183.33334350585938,
296.887939453125
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ojyyCSDsWkDL8kmKYhZ8\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "b24ee5fd-8089-4bee-b5bb-8dc843f50a04"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "BP7MdO9koYRvbrQBV3Qc"
},
"RqYoX0HgOP6tnDCQqSDf": {
"type": "text",
"id": "RqYoX0HgOP6tnDCQqSDf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "人物切换成功，可回游戏界面查看"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vN2kcUkMlq5BdrRaCkYN"
},
"ojyyCSDsWkDL8kmKYhZ8": {
"type": "math_number",
"id": "ojyyCSDsWkDL8kmKYhZ8",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "女"
},
"field_constraints": {
"TEXT": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "GWu0kddIoSHYKC7ZYLBH"
},
"vN2kcUkMlq5BdrRaCkYN": {
"type": "create_stage_dialog",
"id": "vN2kcUkMlq5BdrRaCkYN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
173.33334350585938,
321.99981689453125
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"RqYoX0HgOP6tnDCQqSDf\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "GWu0kddIoSHYKC7ZYLBH"
}
},
"connections": {
"BP7MdO9koYRvbrQBV3Qc": {
"GWu0kddIoSHYKC7ZYLBH": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"GWu0kddIoSHYKC7ZYLBH": {
"ojyyCSDsWkDL8kmKYhZ8": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"vN2kcUkMlq5BdrRaCkYN": {
"type": "next"
}
},
"RqYoX0HgOP6tnDCQqSDf": {},
"ojyyCSDsWkDL8kmKYhZ8": {},
"vN2kcUkMlq5BdrRaCkYN": {
"RqYoX0HgOP6tnDCQqSDf": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
}
},
"comments": {}
}
},
{
"id": "236715b3-affd-4316-b521-24d35b7c6597",
"name": "男孩(1)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": -15,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "93681270-ea6f-4252-bda3-13734e7ca323",
"costumes": {
"93681270-ea6f-4252-bda3-13734e7ca323": {
"asset": "assets/93681270-ea6f-4252-bda3-13734e7ca323.png",
"name": "男孩（1）",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"DLkoHRjdIPLOz4jan4pi": {
"type": "sprite_on_tap",
"id": "DLkoHRjdIPLOz4jan4pi",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
170,
253.1109161376953
]
},
"ESfSIO0Fx3TVsKjIqVkd": {
"type": "variables_set",
"id": "ESfSIO0Fx3TVsKjIqVkd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
172.4434814453125
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"oFVXp7DlKZ8g96FjO5dn\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "b24ee5fd-8089-4bee-b5bb-8dc843f50a04"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DLkoHRjdIPLOz4jan4pi"
},
"oFVXp7DlKZ8g96FjO5dn": {
"type": "math_number",
"id": "oFVXp7DlKZ8g96FjO5dn",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "男"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ESfSIO0Fx3TVsKjIqVkd"
},
"ZmdhqPmJeB4R6BRdq2Je": {
"type": "create_stage_dialog",
"id": "ZmdhqPmJeB4R6BRdq2Je",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
270.8887023925781
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"sQ1X0YBqwfQ8yeNmMZwm\" visible=\"visible\"><field name=\"TEXT\">Hi</field></shadow>"
},
"fields": {
"actor": "__self"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ESfSIO0Fx3TVsKjIqVkd"
},
"sQ1X0YBqwfQ8yeNmMZwm": {
"type": "text",
"id": "sQ1X0YBqwfQ8yeNmMZwm",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "人物切换成功，可回游戏界面查看"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZmdhqPmJeB4R6BRdq2Je"
}
},
"connections": {
"DLkoHRjdIPLOz4jan4pi": {
"ESfSIO0Fx3TVsKjIqVkd": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"ESfSIO0Fx3TVsKjIqVkd": {
"oFVXp7DlKZ8g96FjO5dn": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"ZmdhqPmJeB4R6BRdq2Je": {
"type": "next"
}
},
"oFVXp7DlKZ8g96FjO5dn": {},
"ZmdhqPmJeB4R6BRdq2Je": {
"sQ1X0YBqwfQ8yeNmMZwm": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"sQ1X0YBqwfQ8yeNmMZwm": {}
},
"comments": {}
}
},
{
"id": "1eeeade0-eb83-445b-ac22-7630d267e4e1",
"name": "新角色(8)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": -90,
"scale": 8,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "9dc7a141-83ea-48aa-92b4-7c1c945e0504",
"costumes": {
"9dc7a141-83ea-48aa-92b4-7c1c945e0504": {
"asset": "assets/9dc7a141-83ea-48aa-92b4-7c1c945e0504.svg",
"name": "新角色(8)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "021e7986-7aa2-4d91-9b7a-d3bb6580abf4",
"name": "新角色(9)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -150,
"y": -90,
"scale": 8,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "d2b00c36-7831-42c5-95ce-2b693e854ded",
"costumes": {
"d2b00c36-7831-42c5-95ce-2b693e854ded": {
"asset": "assets/d2b00c36-7831-42c5-95ce-2b693e854ded.svg",
"name": "新角色(8)",
"pivot": {
"x": 0.2839393573404365,
"y": 1.1368683772161603e-13
},
"rotateCenter": {
"x": 0.2839393573404365,
"y": 1.1368683772161603e-13
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "d8addd5a-b327-479f-bd63-636428e27e94",
"name": "隐藏",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 350,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "765bb1b3-1349-4ea4-8983-9fc79e37aee2",
"costumes": {
"765bb1b3-1349-4ea4-8983-9fc79e37aee2": {
"asset": "assets/765bb1b3-1349-4ea4-8983-9fc79e37aee2.svg",
"name": "设置 (1)",
"pivot": {
"x": -6.829123377145152,
"y": -39.28226891149643
},
"rotateCenter": {
"x": -6.829123377145152,
"y": -39.28226891149643
}
}
},
"scripts": {
"blocks": {
"JAJcoh4ZLGAbGIArXYK0": {
"type": "sprite_on_tap",
"id": "JAJcoh4ZLGAbGIArXYK0",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
153.33334350585938,
219.77757263183594
]
},
"EatlVeojxj3xeEoNcJ94": {
"type": "broadcast_input",
"id": "EatlVeojxj3xeEoNcJ94",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "eShea9PoI90mAsu86kaj"
},
"eShea9PoI90mAsu86kaj": {
"type": "self_broadcast",
"id": "eShea9PoI90mAsu86kaj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
754.221923828125
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"EatlVeojxj3xeEoNcJ94\" visible=\"visible\"><field name=\"MESSAGE\">隐身结束</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "JAJcoh4ZLGAbGIArXYK0"
},
"3LNtPvR2muS8CvCrn0xI": {
"type": "self_disappear",
"id": "3LNtPvR2muS8CvCrn0xI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
240.88868713378906
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "eShea9PoI90mAsu86kaj"
},
"6cTkZYrHAxyh43cjPQdx": {
"type": "broadcast_input",
"id": "6cTkZYrHAxyh43cjPQdx",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "DZPeBGeAEFGG4KpoHsb9"
},
"DZPeBGeAEFGG4KpoHsb9": {
"type": "self_listen",
"id": "DZPeBGeAEFGG4KpoHsb9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
140,
1136.4442138671875
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"6cTkZYrHAxyh43cjPQdx\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"JFa4auc99y5pTayixNWH": {
"type": "self_appear",
"id": "JFa4auc99y5pTayixNWH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
157.7777862548828,
1149.777587890625
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DZPeBGeAEFGG4KpoHsb9"
},
"2QVtf8nRkaXrg88vnNCI": {
"type": "on_keydown",
"id": "2QVtf8nRkaXrg88vnNCI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "74"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
108.88888549804688,
428.66644287109375
]
},
"3M3eoYxGoSMst83wdiLA": {
"type": "self_disappear",
"id": "3M3eoYxGoSMst83wdiLA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "4ObVaGTLwoQdW3sxGy2R"
},
"4ObVaGTLwoQdW3sxGy2R": {
"type": "self_broadcast",
"id": "4ObVaGTLwoQdW3sxGy2R",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
201,
356
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"A3nGCHdGDVwHnGAUjnpG\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "2QVtf8nRkaXrg88vnNCI"
},
"A3nGCHdGDVwHnGAUjnpG": {
"type": "broadcast_input",
"id": "A3nGCHdGDVwHnGAUjnpG",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "4ObVaGTLwoQdW3sxGy2R"
}
},
"connections": {
"JAJcoh4ZLGAbGIArXYK0": {
"eShea9PoI90mAsu86kaj": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"EatlVeojxj3xeEoNcJ94": {},
"eShea9PoI90mAsu86kaj": {
"EatlVeojxj3xeEoNcJ94": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"3LNtPvR2muS8CvCrn0xI": {
"type": "next"
}
},
"3LNtPvR2muS8CvCrn0xI": {},
"6cTkZYrHAxyh43cjPQdx": {},
"DZPeBGeAEFGG4KpoHsb9": {
"6cTkZYrHAxyh43cjPQdx": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"JFa4auc99y5pTayixNWH": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"JFa4auc99y5pTayixNWH": {},
"2QVtf8nRkaXrg88vnNCI": {
"4ObVaGTLwoQdW3sxGy2R": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"3M3eoYxGoSMst83wdiLA": {},
"4ObVaGTLwoQdW3sxGy2R": {
"3M3eoYxGoSMst83wdiLA": {
"type": "next"
},
"A3nGCHdGDVwHnGAUjnpG": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"A3nGCHdGDVwHnGAUjnpG": {}
},
"comments": {}
}
},
{
"id": "e500d891-939e-493d-bca2-9af185e8e093",
"name": "显示",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 419.90130836932644,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": false,
"draggable": false,
"currentStyleId": "04785629-4324-44f9-87d9-0d8b6d4f736f",
"costumes": {
"04785629-4324-44f9-87d9-0d8b6d4f736f": {
"asset": "assets/04785629-4324-44f9-87d9-0d8b6d4f736f.svg",
"name": "设置 (1)",
"pivot": {
"x": -5.347378344675803,
"y": -47.39908317721331
},
"rotateCenter": {
"x": -5.347378344675803,
"y": -47.39908317721331
}
}
},
"scripts": {
"blocks": {
"BcvS5TykzlNTOnISnePJ": {
"type": "self_listen",
"id": "BcvS5TykzlNTOnISnePJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"dL5Yu9aNhtzyqygkbPx5\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
235.55552673339844,
1143.3328857421875
]
},
"dL5Yu9aNhtzyqygkbPx5": {
"type": "broadcast_input",
"id": "dL5Yu9aNhtzyqygkbPx5",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "BcvS5TykzlNTOnISnePJ"
},
"ncrwSXX7m7XKZwITwxDG": {
"type": "self_appear",
"id": "ncrwSXX7m7XKZwITwxDG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
311.1110534667969,
1344.4437255859375
],
"parent_id": "z5bPAwYBCafN0u2JjToJ"
},
"07hMzWvMQncQWnVEtpUx": {
"type": "show_hide_cloud_variable",
"id": "07hMzWvMQncQWnVEtpUx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
1136.88623046875
],
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"FUNC": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "BcvS5TykzlNTOnISnePJ"
},
"z5bPAwYBCafN0u2JjToJ": {
"type": "show_hide_cloud_variable",
"id": "z5bPAwYBCafN0u2JjToJ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
380,
1471
],
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "07hMzWvMQncQWnVEtpUx"
},
"K65YMw9uludggKwMBu9G": {
"type": "sprite_on_tap",
"id": "K65YMw9uludggKwMBu9G",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
505.111083984375,
1591.77734375
]
},
"RITKzWyWXeI02aaY1X8h": {
"type": "self_disappear",
"id": "RITKzWyWXeI02aaY1X8h",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
1141.9993896484375
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "0JCkQV9O4vxvZLwZzr1w"
},
"0JCkQV9O4vxvZLwZzr1w": {
"type": "self_broadcast",
"id": "0JCkQV9O4vxvZLwZzr1w",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"BZre6uZhA7bRhQH6WZqO\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
200,
1461.9991455078125
],
"parent_id": "K65YMw9uludggKwMBu9G"
},
"BZre6uZhA7bRhQH6WZqO": {
"type": "broadcast_input",
"id": "BZre6uZhA7bRhQH6WZqO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "0JCkQV9O4vxvZLwZzr1w"
},
"KoKJ3nph0KUEUNTuBUj8": {
"type": "broadcast_input",
"id": "KoKJ3nph0KUEUNTuBUj8",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "kEbF0ir0543ApIstwEHe"
},
"R9W4kZWDyRUqEvZIT69o": {
"type": "self_disappear",
"id": "R9W4kZWDyRUqEvZIT69o",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "kEbF0ir0543ApIstwEHe"
},
"kEbF0ir0543ApIstwEHe": {
"type": "self_broadcast",
"id": "kEbF0ir0543ApIstwEHe",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
242,
1555
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"KoKJ3nph0KUEUNTuBUj8\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "zZOfUb8LFyRHTtied4Pu"
},
"zZOfUb8LFyRHTtied4Pu": {
"type": "controls_if",
"id": "zZOfUb8LFyRHTtied4Pu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"GD3gyNUP1j22TFBp8Z43\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
235.55552673339844,
1303.3328857421875
],
"parent_id": "cpwRp4Pv15uZZgXs6Yn4"
},
"cpwRp4Pv15uZZgXs6Yn4": {
"type": "repeat_forever",
"id": "cpwRp4Pv15uZZgXs6Yn4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
232.22222900390625,
1300.88818359375
],
"parent_id": "ncrwSXX7m7XKZwITwxDG"
},
"h1ORcPFKqQpH15qZKA2t": {
"type": "check_key",
"id": "h1ORcPFKqQpH15qZKA2t",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
994.666015625
],
"shadows": {},
"fields": {
"key_event_type": "down",
"key": "75"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zZOfUb8LFyRHTtied4Pu"
},
"bjxX3I9ozPhqxHBUbeeg": {
"type": "broadcast_input",
"id": "bjxX3I9ozPhqxHBUbeeg",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "jXWooKVDjt31UQRr0i9O"
},
"jXWooKVDjt31UQRr0i9O": {
"type": "self_listen",
"id": "jXWooKVDjt31UQRr0i9O",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"bjxX3I9ozPhqxHBUbeeg\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
114.44444274902344,
1605.3326416015625
]
},
"swLRZvuPlNrH4knMYzGf": {
"type": "self_appear",
"id": "swLRZvuPlNrH4knMYzGf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
1088.666015625
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "jXWooKVDjt31UQRr0i9O"
}
},
"connections": {
"BcvS5TykzlNTOnISnePJ": {
"dL5Yu9aNhtzyqygkbPx5": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"07hMzWvMQncQWnVEtpUx": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"dL5Yu9aNhtzyqygkbPx5": {},
"ncrwSXX7m7XKZwITwxDG": {
"cpwRp4Pv15uZZgXs6Yn4": {
"type": "next"
}
},
"07hMzWvMQncQWnVEtpUx": {
"z5bPAwYBCafN0u2JjToJ": {
"type": "next"
}
},
"z5bPAwYBCafN0u2JjToJ": {
"ncrwSXX7m7XKZwITwxDG": {
"type": "next"
}
},
"K65YMw9uludggKwMBu9G": {
"0JCkQV9O4vxvZLwZzr1w": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"RITKzWyWXeI02aaY1X8h": {},
"0JCkQV9O4vxvZLwZzr1w": {
"BZre6uZhA7bRhQH6WZqO": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"RITKzWyWXeI02aaY1X8h": {
"type": "next"
}
},
"BZre6uZhA7bRhQH6WZqO": {},
"KoKJ3nph0KUEUNTuBUj8": {},
"R9W4kZWDyRUqEvZIT69o": {},
"kEbF0ir0543ApIstwEHe": {
"KoKJ3nph0KUEUNTuBUj8": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"R9W4kZWDyRUqEvZIT69o": {
"type": "next"
}
},
"zZOfUb8LFyRHTtied4Pu": {
"h1ORcPFKqQpH15qZKA2t": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"kEbF0ir0543ApIstwEHe": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"cpwRp4Pv15uZZgXs6Yn4": {
"zZOfUb8LFyRHTtied4Pu": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"h1ORcPFKqQpH15qZKA2t": {},
"bjxX3I9ozPhqxHBUbeeg": {},
"jXWooKVDjt31UQRr0i9O": {
"bjxX3I9ozPhqxHBUbeeg": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"swLRZvuPlNrH4knMYzGf": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"swLRZvuPlNrH4knMYzGf": {}
},
"comments": {}
}
},
{
"id": "ca18b6e2-bc19-4884-b6c7-2274abca3e83",
"name": "新角色(10)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -260,
"y": -150,
"scale": 50,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "3da92712-4aac-4eb4-84f6-c2d4263bfa59",
"costumes": {
"3da92712-4aac-4eb4-84f6-c2d4263bfa59": {
"asset": "assets/3da92712-4aac-4eb4-84f6-c2d4263bfa59.svg",
"name": "新角色(4)",
"pivot": {
"x": 0.7331143617026541,
"y": -0.1567220744681208
},
"rotateCenter": {
"x": 0.7331143617026541,
"y": -0.1567220744681208
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "c213791c-a313-469c-b3f4-23b52108e930",
"name": "新角色(11)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -250,
"y": -190,
"scale": 60,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "5c773ce2-269b-4e1a-ac71-033baecd3ccc",
"costumes": {
"5c773ce2-269b-4e1a-ac71-033baecd3ccc": {
"asset": "assets/5c773ce2-269b-4e1a-ac71-033baecd3ccc.svg",
"name": "新角色(11)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "743d3aac-5c30-4d54-9596-88ff51243a74",
"name": "选择框-多选已选 (1)",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -175.00000000000003,
"y": -189.9999999999999,
"scale": 20,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "96a4b4c6-9a02-4d43-bddc-dd0a1e6e55b7",
"costumes": {
"96a4b4c6-9a02-4d43-bddc-dd0a1e6e55b7": {
"asset": "assets/96a4b4c6-9a02-4d43-bddc-dd0a1e6e55b7.svg",
"name": "选择框-多选已选 (1)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"2R0psb06lsWVsSuaN56y": {
"type": "on_running_group_activated",
"id": "2R0psb06lsWVsSuaN56y",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
124.44444274902344,
-382.4446105957031
]
},
"GqvU8yg7kfWlcI5uq3al": {
"type": "controls_if",
"id": "GqvU8yg7kfWlcI5uq3al",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
13.555365562438965
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"7MmpBbBmrQcvwB31X6Kb\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "2BjsOarfZh5hzdjt1Bz2"
},
"liq4VuT7Zd9y9EJ18voa": {
"type": "variables_get",
"id": "liq4VuT7Zd9y9EJ18voa",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
111.1111068725586,
-51.33714294433594
],
"parent_id": "CJS7HagelzdIWbTtiimv"
},
"CJS7HagelzdIWbTtiimv": {
"type": "logic_compare",
"id": "CJS7HagelzdIWbTtiimv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XaLbS8yuugFi8mfRWsme\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"uG4O8ZYLHIHWqy2xs6w9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
172.22222900390625,
61.33314514160156
],
"parent_id": "GqvU8yg7kfWlcI5uq3al"
},
"uG4O8ZYLHIHWqy2xs6w9": {
"type": "math_number",
"id": "uG4O8ZYLHIHWqy2xs6w9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "CJS7HagelzdIWbTtiimv"
},
"SsCbri5f8xN5kKwGrVZW": {
"type": "self_appear",
"id": "SsCbri5f8xN5kKwGrVZW",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
-312.44464111328125
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "GqvU8yg7kfWlcI5uq3al"
},
"06m3mTyKNh8lB2H5sUdE": {
"type": "self_disappear",
"id": "06m3mTyKNh8lB2H5sUdE",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
-259.1112976074219
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "GqvU8yg7kfWlcI5uq3al"
},
"500UKZzfgfdT8AWASACQ": {
"type": "sprite_on_tap",
"id": "500UKZzfgfdT8AWASACQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
326.6666564941406,
-0.8892822265625
]
},
"dD2uHCWsjqJwocwpJhc6": {
"type": "variables_set",
"id": "dD2uHCWsjqJwocwpJhc6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
58.888885498046875,
-307.1150817871094
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"xpU55NowD5kJ3reSPQe1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "500UKZzfgfdT8AWASACQ"
},
"xpU55NowD5kJ3reSPQe1": {
"type": "math_number",
"id": "xpU55NowD5kJ3reSPQe1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "dD2uHCWsjqJwocwpJhc6"
},
"2BjsOarfZh5hzdjt1Bz2": {
"type": "repeat_forever",
"id": "2BjsOarfZh5hzdjt1Bz2",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
110,
-355.7779541015625
],
"parent_id": "2R0psb06lsWVsSuaN56y"
}
},
"connections": {
"2R0psb06lsWVsSuaN56y": {
"2BjsOarfZh5hzdjt1Bz2": {
"type": "next"
}
},
"GqvU8yg7kfWlcI5uq3al": {
"CJS7HagelzdIWbTtiimv": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"SsCbri5f8xN5kKwGrVZW": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"06m3mTyKNh8lB2H5sUdE": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"liq4VuT7Zd9y9EJ18voa": {},
"CJS7HagelzdIWbTtiimv": {
"uG4O8ZYLHIHWqy2xs6w9": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"liq4VuT7Zd9y9EJ18voa": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"uG4O8ZYLHIHWqy2xs6w9": {},
"SsCbri5f8xN5kKwGrVZW": {},
"06m3mTyKNh8lB2H5sUdE": {},
"500UKZzfgfdT8AWASACQ": {
"dD2uHCWsjqJwocwpJhc6": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"dD2uHCWsjqJwocwpJhc6": {
"xpU55NowD5kJ3reSPQe1": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"xpU55NowD5kJ3reSPQe1": {},
"2BjsOarfZh5hzdjt1Bz2": {
"GqvU8yg7kfWlcI5uq3al": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
}
},
"comments": {}
}
},
{
"id": "78c64460-0395-407b-a8d0-b2745f9989d7",
"name": "选择框-多选已选",
"scene": "6e4bbd50-f319-4c3e-ba74-4017c364a7c5",
"x": -179,
"y": -185.63540969764335,
"scale": 20,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "ca8efc8b-80f3-46e3-ab4e-9a0158db3bf8",
"costumes": {
"ca8efc8b-80f3-46e3-ab4e-9a0158db3bf8": {
"asset": "assets/ca8efc8b-80f3-46e3-ab4e-9a0158db3bf8.svg",
"name": "选择框-多选已选",
"pivot": {
"x": -28.723404255319167,
"y": -27.65957446808511
},
"rotateCenter": {
"x": -28.723404255319167,
"y": -27.65957446808511
}
}
},
"scripts": {
"blocks": {
"05wkzxiAZVEiBfnm2hzt": {
"type": "controls_if",
"id": "05wkzxiAZVEiBfnm2hzt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
138.88888549804688,
-317.5557556152344
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"7MmpBbBmrQcvwB31X6Kb\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "hltuaqP8Qgrltr08Q7SC"
},
"40yNCd8sIBVNJwo8XSo0": {
"type": "self_appear",
"id": "40yNCd8sIBVNJwo8XSo0",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
143.3333282470703,
-295.7779846191406
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "05wkzxiAZVEiBfnm2hzt"
},
"GQZN2uYRLIAo6TKMeURz": {
"type": "math_number",
"id": "GQZN2uYRLIAo6TKMeURz",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vHZCODMiqmh1174ctMfm"
},
"YbIQYgwZn1x5hgqaEceh": {
"type": "self_disappear",
"id": "YbIQYgwZn1x5hgqaEceh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
100.44444274902344,
-335.55572509765625
],
"parent_id": "05wkzxiAZVEiBfnm2hzt"
},
"cD8ACZgsJHc9I4X6kTTY": {
"type": "on_running_group_activated",
"id": "cD8ACZgsJHc9I4X6kTTY",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
385.5555725097656,
-492.4446105957031
]
},
"eQNdhZKRfWzPGzLDUe66": {
"type": "variables_get",
"id": "eQNdhZKRfWzPGzLDUe66",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
192.22222900390625,
46.440635681152344
],
"shadows": {},
"fields": {
"VAR": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "vHZCODMiqmh1174ctMfm"
},
"vHZCODMiqmh1174ctMfm": {
"type": "logic_compare",
"id": "vHZCODMiqmh1174ctMfm",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
184.4444580078125,
-333.111328125
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XaLbS8yuugFi8mfRWsme\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"GQZN2uYRLIAo6TKMeURz\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "05wkzxiAZVEiBfnm2hzt"
},
"C7SKWxIpUA011vnwqpxD": {
"type": "sprite_on_tap",
"id": "C7SKWxIpUA011vnwqpxD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
68.88888549804688,
-362.0003967285156
]
},
"fCgFyYso3gnDLuGvPYjk": {
"type": "math_number",
"id": "fCgFyYso3gnDLuGvPYjk",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "rOehTbPOSPOWNJYL89j6"
},
"rOehTbPOSPOWNJYL89j6": {
"type": "variables_set",
"id": "rOehTbPOSPOWNJYL89j6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
-154.89285278320312
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"fCgFyYso3gnDLuGvPYjk\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "C7SKWxIpUA011vnwqpxD"
},
"hltuaqP8Qgrltr08Q7SC": {
"type": "repeat_forever",
"id": "hltuaqP8Qgrltr08Q7SC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
391.1111145019531,
-449.7781677246094
],
"parent_id": "cD8ACZgsJHc9I4X6kTTY"
}
},
"connections": {
"05wkzxiAZVEiBfnm2hzt": {
"vHZCODMiqmh1174ctMfm": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"YbIQYgwZn1x5hgqaEceh": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"40yNCd8sIBVNJwo8XSo0": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"40yNCd8sIBVNJwo8XSo0": {},
"GQZN2uYRLIAo6TKMeURz": {},
"YbIQYgwZn1x5hgqaEceh": {},
"cD8ACZgsJHc9I4X6kTTY": {
"hltuaqP8Qgrltr08Q7SC": {
"type": "next"
}
},
"eQNdhZKRfWzPGzLDUe66": {},
"vHZCODMiqmh1174ctMfm": {
"GQZN2uYRLIAo6TKMeURz": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"eQNdhZKRfWzPGzLDUe66": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"C7SKWxIpUA011vnwqpxD": {
"rOehTbPOSPOWNJYL89j6": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"fCgFyYso3gnDLuGvPYjk": {},
"rOehTbPOSPOWNJYL89j6": {
"fCgFyYso3gnDLuGvPYjk": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"hltuaqP8Qgrltr08Q7SC": {
"05wkzxiAZVEiBfnm2hzt": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
}
},
"comments": {}
}
},
{
"id": "c1e5805f-d5c4-4230-8e99-c82cac75d2de",
"name": "返回(2)",
"scene": "a9583cd1-1617-4328-9306-3f5b8e108bcd",
"x": -276.8070997084476,
"y": -421.0650558713826,
"scale": 10,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "15065f05-97c1-4ff7-be89-f3ea24ea0b22",
"costumes": {
"15065f05-97c1-4ff7-be89-f3ea24ea0b22": {
"asset": "assets/15065f05-97c1-4ff7-be89-f3ea24ea0b22.svg",
"name": "返回",
"pivot": {
"x": 16.535291565304647,
"y": 43.131036246155986
},
"rotateCenter": {
"x": 16.535291565304647,
"y": 43.131036246155986
}
}
},
"scripts": {
"blocks": {
"VqatZLRQ09QYMXx66lcR": {
"type": "sprite_on_tap",
"id": "VqatZLRQ09QYMXx66lcR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
112.22222137451172,
184.22201538085938
]
},
"QkYH4bXEXFmZsjgngHZK": {
"type": "get_current_scene",
"id": "QkYH4bXEXFmZsjgngHZK",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "cuUOE6H0qPfyJT9Nxvhz"
},
"cuUOE6H0qPfyJT9Nxvhz": {
"type": "switch_to_screen",
"id": "cuUOE6H0qPfyJT9Nxvhz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
16.66666603088379,
97.55536651611328
],
"shadows": {
"screen": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"get_current_scene\" id=\"QkYH4bXEXFmZsjgngHZK\" visible=\"visible\" inline=\"true\"><field name=\"scene\">6e4bbd50-f319-4c3e-ba74-4017c364a7c5</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "K8Eeo9Uf6dCAmaMhAUr2"
},
"OYeDeWRT1ujw2l7jYZ90": {
"type": "change_cloud_variable",
"id": "OYeDeWRT1ujw2l7jYZ90",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"C4sfEGlDG0KGHEasn472\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"method": "increase"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "FJMel1BMGNM5QqVV9wqw"
},
"HakX2i28YxT4jF5P0fE6": {
"type": "user_id_get",
"id": "HakX2i28YxT4jF5P0fE6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "bKhOufpG9yPbJT3yrVi9"
},
"bKBVjAWlpTGyaV1wvjzZ": {
"type": "get_answer",
"id": "bKBVjAWlpTGyaV1wvjzZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "OYeDeWRT1ujw2l7jYZ90"
},
"8ERYQcZEDJAgSolVm0Jz": {
"type": "controls_if",
"id": "8ERYQcZEDJAgSolVm0Jz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"HjPgHOV3Xn44Yq3oxXU5\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "MqEzwDzDu0mgPg047qni"
},
"bKhOufpG9yPbJT3yrVi9": {
"type": "logic_compare",
"id": "bKhOufpG9yPbJT3yrVi9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"RVYQ8PDJqhInMYShXkdG\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"8bv7vAIBXvlWmhECntr8\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">539843282</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "8ERYQcZEDJAgSolVm0Jz"
},
"8bv7vAIBXvlWmhECntr8": {
"type": "math_number",
"id": "8bv7vAIBXvlWmhECntr8",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "539843282"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "bKhOufpG9yPbJT3yrVi9"
},
"MqEzwDzDu0mgPg047qni": {
"type": "on_keydown",
"id": "MqEzwDzDu0mgPg047qni",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "86"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
690.2777709960938,
234.44444274902344
]
},
"VOTC0QApuQMUHZc3lFzP": {
"type": "text",
"id": "VOTC0QApuQMUHZc3lFzP",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "请输入开发者模式要多少个金币："
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FJMel1BMGNM5QqVV9wqw"
},
"FJMel1BMGNM5QqVV9wqw": {
"type": "self_ask",
"id": "FJMel1BMGNM5QqVV9wqw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"VOTC0QApuQMUHZc3lFzP\" visible=\"visible\"><field name=\"TEXT\">请输入开发者模式要多少个金币：</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "8ERYQcZEDJAgSolVm0Jz"
},
"K8Eeo9Uf6dCAmaMhAUr2": {
"type": "show_hide_variable",
"id": "K8Eeo9Uf6dCAmaMhAUr2",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"FUNC": "hide",
"VAR": "7b160e91-8427-47d2-9168-15b00a7a8fc2"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
132.22222900390625,
226.8861083984375
],
"parent_id": "VqatZLRQ09QYMXx66lcR"
}
},
"connections": {
"VqatZLRQ09QYMXx66lcR": {
"K8Eeo9Uf6dCAmaMhAUr2": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"QkYH4bXEXFmZsjgngHZK": {},
"cuUOE6H0qPfyJT9Nxvhz": {
"QkYH4bXEXFmZsjgngHZK": {
"type": "input",
"input_type": "value",
"input_name": "screen"
}
},
"OYeDeWRT1ujw2l7jYZ90": {
"bKBVjAWlpTGyaV1wvjzZ": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"HakX2i28YxT4jF5P0fE6": {},
"bKBVjAWlpTGyaV1wvjzZ": {},
"8ERYQcZEDJAgSolVm0Jz": {
"bKhOufpG9yPbJT3yrVi9": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"FJMel1BMGNM5QqVV9wqw": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"bKhOufpG9yPbJT3yrVi9": {
"HakX2i28YxT4jF5P0fE6": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"8bv7vAIBXvlWmhECntr8": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"8bv7vAIBXvlWmhECntr8": {},
"MqEzwDzDu0mgPg047qni": {
"8ERYQcZEDJAgSolVm0Jz": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"VOTC0QApuQMUHZc3lFzP": {},
"FJMel1BMGNM5QqVV9wqw": {
"OYeDeWRT1ujw2l7jYZ90": {
"type": "next"
},
"VOTC0QApuQMUHZc3lFzP": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"K8Eeo9Uf6dCAmaMhAUr2": {
"cuUOE6H0qPfyJT9Nxvhz": {
"type": "next"
}
}
},
"comments": {}
}
},
{
"id": "f6ce6d4e-98c8-47aa-9666-e0318b918fe2",
"name": "新角色(12)",
"scene": "a9583cd1-1617-4328-9306-3f5b8e108bcd",
"x": -130.6362233344747,
"y": 266.49821590729834,
"scale": 100,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "cbb050a6-a3b1-4460-8409-7af68fc6e3e6",
"costumes": {
"cbb050a6-a3b1-4460-8409-7af68fc6e3e6": {
"asset": "assets/cbb050a6-a3b1-4460-8409-7af68fc6e3e6.svg",
"name": "新角色(12)",
"pivot": {
"x": -56.54667825382302,
"y": -76.78219281914892
},
"rotateCenter": {
"x": -56.54667825382302,
"y": -76.78219281914892
}
}
},
"scripts": {
"blocks": {},
"connections": {},
"comments": {}
}
},
{
"id": "7a2d0fe7-e486-4589-8e0e-c8859aa4a6a8",
"name": "排行榜",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 69.99999999999994,
"y": 419.90130836932644,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "50ab134c-937c-4ffd-a7da-501ad405332c",
"costumes": {
"50ab134c-937c-4ffd-a7da-501ad405332c": {
"asset": "assets/50ab134c-937c-4ffd-a7da-501ad405332c.svg",
"name": "设置 (1)",
"pivot": {
"x": 45.069774524704656,
"y": -58.146943091483294
},
"rotateCenter": {
"x": 45.069774524704656,
"y": -58.146943091483294
}
}
},
"scripts": {
"blocks": {
"w41L0bKte2oy8vlCsiTI": {
"type": "sprite_on_tap",
"id": "w41L0bKte2oy8vlCsiTI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
334
]
},
"UrWteIxCaSa2VWevuYUS": {
"type": "set_entity_show_hide",
"id": "UrWteIxCaSa2VWevuYUS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"TYPE": ""
},
"fields": {
"type": "show",
"sprite": "e5f9b1d9-631a-4687-9985-1595854bc608"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"location": [
-311.1111145019531,
58.666481018066406
],
"parent_id": "45sGngP3aIMxFmb4Vqtm"
},
"BgETmCStkwnjDm5KKZVS": {
"type": "set_entity_show_hide",
"id": "BgETmCStkwnjDm5KKZVS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-263,
155
],
"shadows": {
"TYPE": ""
},
"fields": {
"type": "show",
"sprite": "f424422a-1c70-4cee-87d7-023ca72446dd"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"parent_id": "UrWteIxCaSa2VWevuYUS"
},
"45sGngP3aIMxFmb4Vqtm": {
"type": "self_broadcast",
"id": "45sGngP3aIMxFmb4Vqtm",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"TEyXOJTKBHtWFZjKO4xz\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
-182.22222900390625,
-46.88893127441406
],
"parent_id": "fJZEhy1QreK2vT54htqR"
},
"TEyXOJTKBHtWFZjKO4xz": {
"type": "broadcast_input",
"id": "TEyXOJTKBHtWFZjKO4xz",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "呼出排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "45sGngP3aIMxFmb4Vqtm"
},
"fJZEhy1QreK2vT54htqR": {
"type": "controls_if",
"id": "fJZEhy1QreK2vT54htqR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"II5N73AA9IPuWwv6zelM\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
-346.66668701171875,
135.777587890625
],
"parent_id": "w41L0bKte2oy8vlCsiTI"
},
"cJGJRSqtM0M5rI87xcfj": {
"type": "variables_get",
"id": "cJGJRSqtM0M5rI87xcfj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
12.22222900390625,
131.99417114257812
],
"parent_id": "xxD3pb4vgKCszGrEWi4O"
},
"ploH5xVao0WalrkcFenR": {
"type": "math_number",
"id": "ploH5xVao0WalrkcFenR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xxD3pb4vgKCszGrEWi4O"
},
"xxD3pb4vgKCszGrEWi4O": {
"type": "logic_compare",
"id": "xxD3pb4vgKCszGrEWi4O",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"NicYBmftATkkTrzsEV3W\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"ploH5xVao0WalrkcFenR\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
24.4444580078125,
296.888671875
],
"parent_id": "fJZEhy1QreK2vT54htqR"
},
"j0AXtcyORenswhoePCOR": {
"type": "broadcast_input",
"id": "j0AXtcyORenswhoePCOR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "tcBt9and6iHFoVWJkLRH"
},
"tcBt9and6iHFoVWJkLRH": {
"type": "self_broadcast",
"id": "tcBt9and6iHFoVWJkLRH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-283,
340
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"j0AXtcyORenswhoePCOR\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "fJZEhy1QreK2vT54htqR"
},
"Ijv1kmKrLZTTFMENXMG9": {
"type": "math_number",
"id": "Ijv1kmKrLZTTFMENXMG9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "PzmIcytmUk49Zzh7Zxvy"
},
"PzmIcytmUk49Zzh7Zxvy": {
"type": "variables_set",
"id": "PzmIcytmUk49Zzh7Zxvy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-517.7777709960938,
330.21630859375
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Ijv1kmKrLZTTFMENXMG9\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "tcBt9and6iHFoVWJkLRH"
},
"5rIm1VtHFtItOJ4Xly5L": {
"type": "variables_set",
"id": "5rIm1VtHFtItOJ4Xly5L",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-115,
146
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Rgcd7KCzfl85CbAnl9ji\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "BgETmCStkwnjDm5KKZVS"
},
"Rgcd7KCzfl85CbAnl9ji": {
"type": "math_number",
"id": "Rgcd7KCzfl85CbAnl9ji",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5rIm1VtHFtItOJ4Xly5L"
},
"DEsLOiFpCk3FHwYykzi8": {
"type": "on_running_group_activated",
"id": "DEsLOiFpCk3FHwYykzi8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
0
]
},
"NX7mLE4hnRaEHT1pV0n7": {
"type": "repeat_forever",
"id": "NX7mLE4hnRaEHT1pV0n7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-517.7777709960938,
-285.7779846191406
],
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DEsLOiFpCk3FHwYykzi8"
},
"EeRcdCADi2j8NitlKIQb": {
"type": "controls_if",
"id": "EeRcdCADi2j8NitlKIQb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-517.7777709960938,
84.22200775146484
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"t9VZt6YmnNYywzXtt7Kq\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "NX7mLE4hnRaEHT1pV0n7"
},
"BAaaF175RG3ixh8sKdqA": {
"type": "math_number",
"id": "BAaaF175RG3ixh8sKdqA",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "KUrVeOVONsBFyGdg4EQz"
},
"KUrVeOVONsBFyGdg4EQz": {
"type": "logic_compare",
"id": "KUrVeOVONsBFyGdg4EQz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-27,
158
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"DZpIMaygKezOJOeT42VA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"BAaaF175RG3ixh8sKdqA\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EeRcdCADi2j8NitlKIQb"
},
"jncW2Ww5yLv5NPKHEouA": {
"type": "variables_get",
"id": "jncW2Ww5yLv5NPKHEouA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "KUrVeOVONsBFyGdg4EQz"
},
"eVbG5apmSodq6Z4u1Ka1": {
"type": "wait",
"id": "eVbG5apmSodq6Z4u1Ka1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-517.7777709960938,
373.5553283691406
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"jwZ8XZkVJnYCK5mpqWwe\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "EeRcdCADi2j8NitlKIQb"
},
"jwZ8XZkVJnYCK5mpqWwe": {
"type": "math_number",
"id": "jwZ8XZkVJnYCK5mpqWwe",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "3"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "eVbG5apmSodq6Z4u1Ka1"
},
"7NNmEMBnIlnPDDM0IIi3": {
"type": "self_broadcast",
"id": "7NNmEMBnIlnPDDM0IIi3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-19,
240
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"Hr99Cq3r339Poai0R6Bl\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "eVbG5apmSodq6Z4u1Ka1"
},
"Hr99Cq3r339Poai0R6Bl": {
"type": "broadcast_input",
"id": "Hr99Cq3r339Poai0R6Bl",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "7NNmEMBnIlnPDDM0IIi3"
},
"YkCFtshGe5PgmgLC89WT": {
"type": "variables_set",
"id": "YkCFtshGe5PgmgLC89WT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"plMVt3zA7yOUsHhcC8wg\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "7NNmEMBnIlnPDDM0IIi3"
},
"plMVt3zA7yOUsHhcC8wg": {
"type": "math_number",
"id": "plMVt3zA7yOUsHhcC8wg",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "YkCFtshGe5PgmgLC89WT"
},
"01hghlwSShNKUDSJbkge": {
"type": "self_listen",
"id": "01hghlwSShNKUDSJbkge",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"UMUXjaHNs4JFWXraKUjP\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
882
]
},
"UMUXjaHNs4JFWXraKUjP": {
"type": "broadcast_input",
"id": "UMUXjaHNs4JFWXraKUjP",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "01hghlwSShNKUDSJbkge"
},
"wj7Vg2ISn5PnuMQQKvNI": {
"type": "self_disappear",
"id": "wj7Vg2ISn5PnuMQQKvNI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "wGk8avTAYKvnEGdC5ucy"
},
"0C3frX7MZBnI6ELw87UC": {
"type": "self_appear",
"id": "0C3frX7MZBnI6ELw87UC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "3cxiyx5RgWzZiy7V5eX6"
},
"3cxiyx5RgWzZiy7V5eX6": {
"type": "self_listen",
"id": "3cxiyx5RgWzZiy7V5eX6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"dco0D3tmv2eGlzdQVl8x\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
762
]
},
"dco0D3tmv2eGlzdQVl8x": {
"type": "broadcast_input",
"id": "dco0D3tmv2eGlzdQVl8x",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "3cxiyx5RgWzZiy7V5eX6"
},
"GmQeDF7JcLGinSpbjeWj": {
"type": "math_number",
"id": "GmQeDF7JcLGinSpbjeWj",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "wGk8avTAYKvnEGdC5ucy"
},
"etfHLQhXCPTgU70DSxw1": {
"type": "broadcast_input",
"id": "etfHLQhXCPTgU70DSxw1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "tiPDawRg5QGC6bx8913P"
},
"tiPDawRg5QGC6bx8913P": {
"type": "self_broadcast",
"id": "tiPDawRg5QGC6bx8913P",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"etfHLQhXCPTgU70DSxw1\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
-332.4444580078125,
424.1111145019531
],
"parent_id": "01hghlwSShNKUDSJbkge"
},
"wGk8avTAYKvnEGdC5ucy": {
"type": "variables_set",
"id": "wGk8avTAYKvnEGdC5ucy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"GmQeDF7JcLGinSpbjeWj\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "tiPDawRg5QGC6bx8913P"
},
"SB34ybNQzOre7SvKUbSV": {
"type": "on_keydown",
"id": "SB34ybNQzOre7SvKUbSV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "76"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
492.2221984863281,
494.22198486328125
]
},
"5PH3c9OI9GANPTae9SSk": {
"type": "broadcast_input",
"id": "5PH3c9OI9GANPTae9SSk",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qhpdVhfxXYv2HVY7JEql"
},
"5tRYwzx6bHNGovgky1jN": {
"type": "self_broadcast",
"id": "5tRYwzx6bHNGovgky1jN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"FwrEIPiGQJDwKq2QNjri\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ONQZZQ6WEjhDDZe2wpP1"
},
"CJZM2tExxJ9pF68pNMHr": {
"type": "math_number",
"id": "CJZM2tExxJ9pF68pNMHr",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "djWXtkkgyhhyffr1kMiP"
},
"FQ79ckOKmrhHSiJ7BUAe": {
"type": "set_entity_show_hide",
"id": "FQ79ckOKmrhHSiJ7BUAe",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"TYPE": ""
},
"fields": {
"sprite": "f424422a-1c70-4cee-87d7-023ca72446dd",
"type": "show"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"parent_id": "iGrGhwvdJzJS9GDl0E2h"
},
"FwrEIPiGQJDwKq2QNjri": {
"type": "broadcast_input",
"id": "FwrEIPiGQJDwKq2QNjri",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "呼出排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5tRYwzx6bHNGovgky1jN"
},
"ONQZZQ6WEjhDDZe2wpP1": {
"type": "controls_if",
"id": "ONQZZQ6WEjhDDZe2wpP1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
96,
566
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"YpZG60IJ9hf2JBInCoFx\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "Nezt0sTVDMj06vVTxf8x"
},
"dJM1UZlVtha66ERVYup1": {
"type": "variables_get",
"id": "dJM1UZlVtha66ERVYup1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "e5REvHJU8PDXvuB8dltj"
},
"djWXtkkgyhhyffr1kMiP": {
"type": "variables_set",
"id": "djWXtkkgyhhyffr1kMiP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"CJZM2tExxJ9pF68pNMHr\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "qhpdVhfxXYv2HVY7JEql"
},
"e5REvHJU8PDXvuB8dltj": {
"type": "logic_compare",
"id": "e5REvHJU8PDXvuB8dltj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"JYkjoU2GYyN0PwpUKmD7\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"tudXslnodCR4vNVBn3lw\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"OP": "EQ"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ONQZZQ6WEjhDDZe2wpP1"
},
"iGrGhwvdJzJS9GDl0E2h": {
"type": "set_entity_show_hide",
"id": "iGrGhwvdJzJS9GDl0E2h",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"TYPE": ""
},
"fields": {
"sprite": "e5f9b1d9-631a-4687-9985-1595854bc608",
"type": "show"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" need_text=\"false\"></mutation>",
"is_output": false,
"parent_id": "5tRYwzx6bHNGovgky1jN"
},
"mxqBDjWkxQqmz68JzJJf": {
"type": "math_number",
"id": "mxqBDjWkxQqmz68JzJJf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qL4oaZjq9eNLGWr45Ois"
},
"qL4oaZjq9eNLGWr45Ois": {
"type": "variables_set",
"id": "qL4oaZjq9eNLGWr45Ois",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"mxqBDjWkxQqmz68JzJJf\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"VAR": "951bc0d9-5666-4c10-9390-62993d096e52"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "FQ79ckOKmrhHSiJ7BUAe"
},
"qhpdVhfxXYv2HVY7JEql": {
"type": "self_broadcast",
"id": "qhpdVhfxXYv2HVY7JEql",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"5PH3c9OI9GANPTae9SSk\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ONQZZQ6WEjhDDZe2wpP1"
},
"tudXslnodCR4vNVBn3lw": {
"type": "math_number",
"id": "tudXslnodCR4vNVBn3lw",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "e5REvHJU8PDXvuB8dltj"
},
"Nezt0sTVDMj06vVTxf8x": {
"type": "wait",
"id": "Nezt0sTVDMj06vVTxf8x",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"RRlM46QKnxDwtNQcfHpK\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
460,
524.66650390625
],
"parent_id": "SB34ybNQzOre7SvKUbSV"
},
"RRlM46QKnxDwtNQcfHpK": {
"type": "math_number",
"id": "RRlM46QKnxDwtNQcfHpK",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Nezt0sTVDMj06vVTxf8x"
}
},
"connections": {
"w41L0bKte2oy8vlCsiTI": {
"fJZEhy1QreK2vT54htqR": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"UrWteIxCaSa2VWevuYUS": {
"BgETmCStkwnjDm5KKZVS": {
"type": "next"
}
},
"BgETmCStkwnjDm5KKZVS": {
"5rIm1VtHFtItOJ4Xly5L": {
"type": "next"
}
},
"45sGngP3aIMxFmb4Vqtm": {
"TEyXOJTKBHtWFZjKO4xz": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"UrWteIxCaSa2VWevuYUS": {
"type": "next"
}
},
"TEyXOJTKBHtWFZjKO4xz": {},
"fJZEhy1QreK2vT54htqR": {
"45sGngP3aIMxFmb4Vqtm": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"xxD3pb4vgKCszGrEWi4O": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"tcBt9and6iHFoVWJkLRH": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"cJGJRSqtM0M5rI87xcfj": {},
"ploH5xVao0WalrkcFenR": {},
"xxD3pb4vgKCszGrEWi4O": {
"ploH5xVao0WalrkcFenR": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"cJGJRSqtM0M5rI87xcfj": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"j0AXtcyORenswhoePCOR": {},
"tcBt9and6iHFoVWJkLRH": {
"j0AXtcyORenswhoePCOR": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"PzmIcytmUk49Zzh7Zxvy": {
"type": "next"
}
},
"Ijv1kmKrLZTTFMENXMG9": {},
"PzmIcytmUk49Zzh7Zxvy": {
"Ijv1kmKrLZTTFMENXMG9": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"5rIm1VtHFtItOJ4Xly5L": {
"Rgcd7KCzfl85CbAnl9ji": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"Rgcd7KCzfl85CbAnl9ji": {},
"DEsLOiFpCk3FHwYykzi8": {
"NX7mLE4hnRaEHT1pV0n7": {
"type": "next"
}
},
"NX7mLE4hnRaEHT1pV0n7": {
"EeRcdCADi2j8NitlKIQb": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"EeRcdCADi2j8NitlKIQb": {
"KUrVeOVONsBFyGdg4EQz": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"eVbG5apmSodq6Z4u1Ka1": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"BAaaF175RG3ixh8sKdqA": {},
"KUrVeOVONsBFyGdg4EQz": {
"BAaaF175RG3ixh8sKdqA": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"jncW2Ww5yLv5NPKHEouA": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"jncW2Ww5yLv5NPKHEouA": {},
"eVbG5apmSodq6Z4u1Ka1": {
"jwZ8XZkVJnYCK5mpqWwe": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"7NNmEMBnIlnPDDM0IIi3": {
"type": "next"
}
},
"jwZ8XZkVJnYCK5mpqWwe": {},
"7NNmEMBnIlnPDDM0IIi3": {
"Hr99Cq3r339Poai0R6Bl": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"YkCFtshGe5PgmgLC89WT": {
"type": "next"
}
},
"Hr99Cq3r339Poai0R6Bl": {},
"YkCFtshGe5PgmgLC89WT": {
"plMVt3zA7yOUsHhcC8wg": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"plMVt3zA7yOUsHhcC8wg": {},
"01hghlwSShNKUDSJbkge": {
"UMUXjaHNs4JFWXraKUjP": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"tiPDawRg5QGC6bx8913P": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"UMUXjaHNs4JFWXraKUjP": {},
"wj7Vg2ISn5PnuMQQKvNI": {},
"0C3frX7MZBnI6ELw87UC": {},
"3cxiyx5RgWzZiy7V5eX6": {
"0C3frX7MZBnI6ELw87UC": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"dco0D3tmv2eGlzdQVl8x": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"dco0D3tmv2eGlzdQVl8x": {},
"GmQeDF7JcLGinSpbjeWj": {},
"etfHLQhXCPTgU70DSxw1": {},
"tiPDawRg5QGC6bx8913P": {
"etfHLQhXCPTgU70DSxw1": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"wGk8avTAYKvnEGdC5ucy": {
"type": "next"
}
},
"wGk8avTAYKvnEGdC5ucy": {
"GmQeDF7JcLGinSpbjeWj": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
},
"wj7Vg2ISn5PnuMQQKvNI": {
"type": "next"
}
},
"SB34ybNQzOre7SvKUbSV": {
"Nezt0sTVDMj06vVTxf8x": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"5PH3c9OI9GANPTae9SSk": {},
"5tRYwzx6bHNGovgky1jN": {
"FwrEIPiGQJDwKq2QNjri": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"iGrGhwvdJzJS9GDl0E2h": {
"type": "next"
}
},
"CJZM2tExxJ9pF68pNMHr": {},
"FQ79ckOKmrhHSiJ7BUAe": {
"qL4oaZjq9eNLGWr45Ois": {
"type": "next"
}
},
"FwrEIPiGQJDwKq2QNjri": {},
"ONQZZQ6WEjhDDZe2wpP1": {
"5tRYwzx6bHNGovgky1jN": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"e5REvHJU8PDXvuB8dltj": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"qhpdVhfxXYv2HVY7JEql": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"dJM1UZlVtha66ERVYup1": {},
"djWXtkkgyhhyffr1kMiP": {
"CJZM2tExxJ9pF68pNMHr": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"e5REvHJU8PDXvuB8dltj": {
"dJM1UZlVtha66ERVYup1": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"tudXslnodCR4vNVBn3lw": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"iGrGhwvdJzJS9GDl0E2h": {
"FQ79ckOKmrhHSiJ7BUAe": {
"type": "next"
}
},
"mxqBDjWkxQqmz68JzJJf": {},
"qL4oaZjq9eNLGWr45Ois": {
"mxqBDjWkxQqmz68JzJJf": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"qhpdVhfxXYv2HVY7JEql": {
"5PH3c9OI9GANPTae9SSk": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"djWXtkkgyhhyffr1kMiP": {
"type": "next"
}
},
"tudXslnodCR4vNVBn3lw": {},
"Nezt0sTVDMj06vVTxf8x": {
"ONQZZQ6WEjhDDZe2wpP1": {
"type": "next"
},
"RRlM46QKnxDwtNQcfHpK": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"RRlM46QKnxDwtNQcfHpK": {}
},
"comments": {}
}
},
{
"id": "e5f9b1d9-631a-4687-9985-1595854bc608",
"name": "金币排行榜",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 55,
"y": 420,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": false,
"draggable": false,
"currentStyleId": "48c1ba06-229c-4fc6-b821-4ced02959e23",
"costumes": {
"48c1ba06-229c-4fc6-b821-4ced02959e23": {
"asset": "assets/48c1ba06-229c-4fc6-b821-4ced02959e23.svg",
"name": "设置 (1)",
"pivot": {
"x": -52.91392252260596,
"y": -105.71348726941343
},
"rotateCenter": {
"x": -52.91392252260596,
"y": -105.71348726941343
}
}
},
"scripts": {
"blocks": {
"pn6GondfvJX6koB56oHJ": {
"type": "broadcast_input",
"id": "pn6GondfvJX6koB56oHJ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "呼出排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "woE8UMjPZixxku22sLsG"
},
"woE8UMjPZixxku22sLsG": {
"type": "self_listen",
"id": "woE8UMjPZixxku22sLsG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"pn6GondfvJX6koB56oHJ\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
0
]
},
"FdEiz2Or6rJacpPhRxWR": {
"type": "math_number",
"id": "FdEiz2Or6rJacpPhRxWR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "55"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "cyKFb5ERQaNAyd0UMWdv"
},
"OFWSgs4I2yKP8025WwMX": {
"type": "math_number",
"id": "OFWSgs4I2yKP8025WwMX",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "cyKFb5ERQaNAyd0UMWdv"
},
"QKaXDCN5hxWD6fbu5M7z": {
"type": "math_number",
"id": "QKaXDCN5hxWD6fbu5M7z",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "350"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "cyKFb5ERQaNAyd0UMWdv"
},
"cyKFb5ERQaNAyd0UMWdv": {
"type": "self_glide_to",
"id": "cyKFb5ERQaNAyd0UMWdv",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-473.3333435058594,
740.8886108398438
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"OFWSgs4I2yKP8025WwMX\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>",
"x": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"FdEiz2Or6rJacpPhRxWR\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">70</field></shadow>",
"y": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"QKaXDCN5hxWD6fbu5M7z\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">420</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "woE8UMjPZixxku22sLsG"
},
"KBIC6ku6kEdHpf7j3BYC": {
"type": "math_number",
"id": "KBIC6ku6kEdHpf7j3BYC",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "55"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "trimVNNXqBgUY1ofcMtM"
},
"KPboF5fOfGEeJd2sZDw1": {
"type": "math_number",
"id": "KPboF5fOfGEeJd2sZDw1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "trimVNNXqBgUY1ofcMtM"
},
"NcQeCnkwY8eChw5IeqSU": {
"type": "broadcast_input",
"id": "NcQeCnkwY8eChw5IeqSU",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Xc2SWg7zY2ArvNg0OBdK"
},
"Xc2SWg7zY2ArvNg0OBdK": {
"type": "self_listen",
"id": "Xc2SWg7zY2ArvNg0OBdK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"NcQeCnkwY8eChw5IeqSU\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
0,
120
]
},
"rgBcLMYa9oyziQoyi0VE": {
"type": "math_number",
"id": "rgBcLMYa9oyziQoyi0VE",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "420"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "trimVNNXqBgUY1ofcMtM"
},
"trimVNNXqBgUY1ofcMtM": {
"type": "self_glide_to",
"id": "trimVNNXqBgUY1ofcMtM",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"KPboF5fOfGEeJd2sZDw1\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>",
"x": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"KBIC6ku6kEdHpf7j3BYC\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">70</field></shadow>",
"y": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"rgBcLMYa9oyziQoyi0VE\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">350</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Xc2SWg7zY2ArvNg0OBdK"
},
"evKpY8T8ejUKpnxLZvLz": {
"type": "self_disappear",
"id": "evKpY8T8ejUKpnxLZvLz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-473.3333435058594,
240.88868713378906
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "trimVNNXqBgUY1ofcMtM"
},
"7Y8WR6SkTEfjVxPdHbqg": {
"type": "sprite_on_tap",
"id": "7Y8WR6SkTEfjVxPdHbqg",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-78.88888549804688,
379.1109313964844
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"Lgv7u1lFmkrTRI6jRsVb": {
"type": "controls_if",
"id": "Lgv7u1lFmkrTRI6jRsVb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-94.44444274902344,
651.777587890625
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"7TnHEzfYliqSapRFecDc\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "7Y8WR6SkTEfjVxPdHbqg"
},
"TA739fpno5sPsWdqOlM7": {
"type": "is_ranking_show_hide",
"id": "TA739fpno5sPsWdqOlM7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAL": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
54.44444274902344,
721.7755737304688
],
"parent_id": "Lgv7u1lFmkrTRI6jRsVb"
},
"NpnaSk20iIFl0l7HKNzC": {
"type": "show_ranking",
"id": "NpnaSk20iIFl0l7HKNzC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "77b653df-3e58-4ace-a7ae-d22774f4b634"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
1.111114501953125,
790.6644897460938
],
"parent_id": "Lgv7u1lFmkrTRI6jRsVb"
},
"7q5OZnJyXYRQJzh2LFmg": {
"type": "hide_ranking",
"id": "7q5OZnJyXYRQJzh2LFmg",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-94.44444274902344,
683.997802734375
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Lgv7u1lFmkrTRI6jRsVb"
}
},
"connections": {
"pn6GondfvJX6koB56oHJ": {},
"woE8UMjPZixxku22sLsG": {
"pn6GondfvJX6koB56oHJ": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"cyKFb5ERQaNAyd0UMWdv": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"FdEiz2Or6rJacpPhRxWR": {},
"OFWSgs4I2yKP8025WwMX": {},
"QKaXDCN5hxWD6fbu5M7z": {},
"cyKFb5ERQaNAyd0UMWdv": {
"FdEiz2Or6rJacpPhRxWR": {
"type": "input",
"input_type": "value",
"input_name": "x"
},
"OFWSgs4I2yKP8025WwMX": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"QKaXDCN5hxWD6fbu5M7z": {
"type": "input",
"input_type": "value",
"input_name": "y"
}
},
"KBIC6ku6kEdHpf7j3BYC": {},
"KPboF5fOfGEeJd2sZDw1": {},
"NcQeCnkwY8eChw5IeqSU": {},
"Xc2SWg7zY2ArvNg0OBdK": {
"NcQeCnkwY8eChw5IeqSU": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"trimVNNXqBgUY1ofcMtM": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"rgBcLMYa9oyziQoyi0VE": {},
"trimVNNXqBgUY1ofcMtM": {
"KBIC6ku6kEdHpf7j3BYC": {
"type": "input",
"input_type": "value",
"input_name": "x"
},
"KPboF5fOfGEeJd2sZDw1": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"rgBcLMYa9oyziQoyi0VE": {
"type": "input",
"input_type": "value",
"input_name": "y"
},
"evKpY8T8ejUKpnxLZvLz": {
"type": "next"
}
},
"evKpY8T8ejUKpnxLZvLz": {},
"7Y8WR6SkTEfjVxPdHbqg": {
"Lgv7u1lFmkrTRI6jRsVb": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"Lgv7u1lFmkrTRI6jRsVb": {
"TA739fpno5sPsWdqOlM7": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"NpnaSk20iIFl0l7HKNzC": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"7q5OZnJyXYRQJzh2LFmg": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"TA739fpno5sPsWdqOlM7": {},
"NpnaSk20iIFl0l7HKNzC": {},
"7q5OZnJyXYRQJzh2LFmg": {}
},
"comments": {}
}
},
{
"id": "f424422a-1c70-4cee-87d7-023ca72446dd",
"name": "隐身卡排行榜(1)",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 55,
"y": 420,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": false,
"draggable": false,
"currentStyleId": "29431f41-f7d1-4703-8dc8-43228a7fb995",
"costumes": {
"29431f41-f7d1-4703-8dc8-43228a7fb995": {
"asset": "assets/29431f41-f7d1-4703-8dc8-43228a7fb995.svg",
"name": "设置 (1)",
"pivot": {
"x": -90.64367818994646,
"y": -105.71348726941346
},
"rotateCenter": {
"x": -90.64367818994646,
"y": -105.71348726941346
}
}
},
"scripts": {
"blocks": {
"PiOkDMSOxgcj6xged0rF": {
"type": "math_number",
"id": "PiOkDMSOxgcj6xged0rF",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "55"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "f2us2zk8nxXV07NOLwqf"
},
"R0gBMZhvgwi4wq6w5cAT": {
"type": "broadcast_input",
"id": "R0gBMZhvgwi4wq6w5cAT",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "呼出排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Yp8R1QxxYyf6nDyyy4yK"
},
"VWIP9cQoyD4zeE32pc6O": {
"type": "math_number",
"id": "VWIP9cQoyD4zeE32pc6O",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "270"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "f2us2zk8nxXV07NOLwqf"
},
"Yp8R1QxxYyf6nDyyy4yK": {
"type": "self_listen",
"id": "Yp8R1QxxYyf6nDyyy4yK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-235.55555725097656,
333.111083984375
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"R0gBMZhvgwi4wq6w5cAT\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"f2us2zk8nxXV07NOLwqf": {
"type": "self_glide_to",
"id": "f2us2zk8nxXV07NOLwqf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-217.7777862548828,
380.88861083984375
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"yXMPyWzd9yQ94UgUX0uR\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>",
"x": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"PiOkDMSOxgcj6xged0rF\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">70</field></shadow>",
"y": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"VWIP9cQoyD4zeE32pc6O\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">420</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Yp8R1QxxYyf6nDyyy4yK"
},
"yXMPyWzd9yQ94UgUX0uR": {
"type": "math_number",
"id": "yXMPyWzd9yQ94UgUX0uR",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "f2us2zk8nxXV07NOLwqf"
},
"C9kl5bYfPd7cWA1ghh7s": {
"type": "math_number",
"id": "C9kl5bYfPd7cWA1ghh7s",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "55"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "NqoiLqoLpajxDmxNWMwk"
},
"DtwJpVqECgLUdeL4xTAZ": {
"type": "self_listen",
"id": "DtwJpVqECgLUdeL4xTAZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-297.1111145019531,
534.3333129882812
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"LDivnxXCwW9MpDchPT1I\" visible=\"visible\"><field name=\"MESSAGE\">呼出排行榜按钮</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"LDivnxXCwW9MpDchPT1I": {
"type": "broadcast_input",
"id": "LDivnxXCwW9MpDchPT1I",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏排行榜按钮"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "DtwJpVqECgLUdeL4xTAZ"
},
"MMdAHcvZtUBhL90B4a3S": {
"type": "math_number",
"id": "MMdAHcvZtUBhL90B4a3S",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "NqoiLqoLpajxDmxNWMwk"
},
"NqoiLqoLpajxDmxNWMwk": {
"type": "self_glide_to",
"id": "NqoiLqoLpajxDmxNWMwk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"MMdAHcvZtUBhL90B4a3S\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>",
"x": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"C9kl5bYfPd7cWA1ghh7s\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">70</field></shadow>",
"y": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"utbYs78BhT4BBj5q2dLx\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">350</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "DtwJpVqECgLUdeL4xTAZ"
},
"OSGMFJ6JEqPF56PA0V4i": {
"type": "self_disappear",
"id": "OSGMFJ6JEqPF56PA0V4i",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-245.55557250976562,
615.3331298828125
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "NqoiLqoLpajxDmxNWMwk"
},
"utbYs78BhT4BBj5q2dLx": {
"type": "math_number",
"id": "utbYs78BhT4BBj5q2dLx",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "420"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "NqoiLqoLpajxDmxNWMwk"
},
"4uir78f94B6cY3uktKvh": {
"type": "show_ranking",
"id": "4uir78f94B6cY3uktKvh",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "75cbf2e5-8310-4c54-b3c5-1002a25d4685"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "gboWiDWpZ19DFUOvbxIC"
},
"QcrL5jUSYObyLL4s61EU": {
"type": "hide_ranking",
"id": "QcrL5jUSYObyLL4s61EU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "gboWiDWpZ19DFUOvbxIC"
},
"WpQA3ympiS8DnptINUUH": {
"type": "is_ranking_show_hide",
"id": "WpQA3ympiS8DnptINUUH",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAL": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "gboWiDWpZ19DFUOvbxIC"
},
"cs8HiH5PN5HPQjLOo4Yw": {
"type": "sprite_on_tap",
"id": "cs8HiH5PN5HPQjLOo4Yw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-464.1666564941406,
590
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"gboWiDWpZ19DFUOvbxIC": {
"type": "controls_if",
"id": "gboWiDWpZ19DFUOvbxIC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"gxsqP9INEOyWiceiSKLn\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "cs8HiH5PN5HPQjLOo4Yw"
}
},
"connections": {
"PiOkDMSOxgcj6xged0rF": {},
"R0gBMZhvgwi4wq6w5cAT": {},
"VWIP9cQoyD4zeE32pc6O": {},
"Yp8R1QxxYyf6nDyyy4yK": {
"R0gBMZhvgwi4wq6w5cAT": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"f2us2zk8nxXV07NOLwqf": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"f2us2zk8nxXV07NOLwqf": {
"PiOkDMSOxgcj6xged0rF": {
"type": "input",
"input_type": "value",
"input_name": "x"
},
"VWIP9cQoyD4zeE32pc6O": {
"type": "input",
"input_type": "value",
"input_name": "y"
},
"yXMPyWzd9yQ94UgUX0uR": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"yXMPyWzd9yQ94UgUX0uR": {},
"C9kl5bYfPd7cWA1ghh7s": {},
"DtwJpVqECgLUdeL4xTAZ": {
"LDivnxXCwW9MpDchPT1I": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"NqoiLqoLpajxDmxNWMwk": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"LDivnxXCwW9MpDchPT1I": {},
"MMdAHcvZtUBhL90B4a3S": {},
"NqoiLqoLpajxDmxNWMwk": {
"C9kl5bYfPd7cWA1ghh7s": {
"type": "input",
"input_type": "value",
"input_name": "x"
},
"MMdAHcvZtUBhL90B4a3S": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"OSGMFJ6JEqPF56PA0V4i": {
"type": "next"
},
"utbYs78BhT4BBj5q2dLx": {
"type": "input",
"input_type": "value",
"input_name": "y"
}
},
"OSGMFJ6JEqPF56PA0V4i": {},
"utbYs78BhT4BBj5q2dLx": {},
"4uir78f94B6cY3uktKvh": {},
"QcrL5jUSYObyLL4s61EU": {},
"WpQA3ympiS8DnptINUUH": {},
"cs8HiH5PN5HPQjLOo4Yw": {
"gboWiDWpZ19DFUOvbxIC": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"gboWiDWpZ19DFUOvbxIC": {
"4uir78f94B6cY3uktKvh": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"QcrL5jUSYObyLL4s61EU": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"WpQA3ympiS8DnptINUUH": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
}
},
"comments": {}
}
},
{
"id": "41f68bf4-077a-4c50-83be-54b65408bc82",
"name": "新角色(1)",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": -304.8735354190088,
"y": -436.4719101123595,
"scale": 1,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "20b5e865-289a-4db5-beee-f91f3e20fd87",
"costumes": {
"20b5e865-289a-4db5-beee-f91f3e20fd87": {
"asset": "assets/20b5e865-289a-4db5-beee-f91f3e20fd87.svg",
"name": "新角色(1)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"cr51iaFbrNUdW60nqN3j": {
"type": "on_running_group_activated",
"id": "cr51iaFbrNUdW60nqN3j",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
87.77777862548828,
51.999813079833984
]
},
"00vkI5pOXTYRaJU7O8ED": {
"type": "math_number",
"id": "00vkI5pOXTYRaJU7O8ED",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "22"
},
"field_constraints": {
"NUM": {
"min": 1,
"max": 10000,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "JdLuebXf5nd7pLLHXqR7"
},
"JdLuebXf5nd7pLLHXqR7": {
"type": "stamp",
"id": "JdLuebXf5nd7pLLHXqR7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"6KL60wPtSphBPCKazM0G\" visible=\"visible\"><field name=\"TEXT\">Hello</field></shadow>",
"size": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"00vkI5pOXTYRaJU7O8ED\" visible=\"visible\"><field constraints=\"1,10000,0,\" name=\"NUM\">24</field></shadow>"
},
"fields": {
"align": "left"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
123.33333587646484,
221.99981689453125
],
"parent_id": "pGG2HqyXiE3hKtKPcHBB"
},
"pGG2HqyXiE3hKtKPcHBB": {
"type": "clear_drawing",
"id": "pGG2HqyXiE3hKtKPcHBB",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
87.77777862548828,
91.99981689453125
],
"parent_id": "dC2vXkmh9rbUgOvE6yUr"
},
"dC2vXkmh9rbUgOvE6yUr": {
"type": "repeat_forever",
"id": "dC2vXkmh9rbUgOvE6yUr",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
80,
83.11092376708984
],
"parent_id": "cr51iaFbrNUdW60nqN3j"
},
"1MSSfOem2DuatTi7tahO": {
"type": "text",
"id": "1MSSfOem2DuatTi7tahO",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "  time:"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"3fhryOpp8UCFY7Dbbqwe": {
"type": "get_3",
"id": "3fhryOpp8UCFY7Dbbqwe",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "921e60b7-e6d0-45b4-b5d6-614b708bd057",
"attribute": "5"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"5bYTz6j38tWOJw89QTV4": {
"type": "variables_get",
"id": "5bYTz6j38tWOJw89QTV4",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "abb63166-ea57-4527-bd1a-0e4df9c62823"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"FBdJiPU0WAa9vVe39kc8": {
"type": "text",
"id": "FBdJiPU0WAa9vVe39kc8",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "  size_squares:"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"RaWL9or9esSQSVzUFsIl": {
"type": "text",
"id": "RaWL9or9esSQSVzUFsIl",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "speed:"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"p47xWG5QDp4sIUCWHIkl": {
"type": "variables_get",
"id": "p47xWG5QDp4sIUCWHIkl",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"sZUiQZ8FbbgoNKqOizTQ": {
"type": "text_join",
"id": "sZUiQZ8FbbgoNKqOizTQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"TITLE_HEAD": "",
"ADD0": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"RaWL9or9esSQSVzUFsIl\" visible=\"visible\"><field name=\"TEXT\">ab</field></shadow>",
"ADD1": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"UsojG0aOb8p5CyWeJb8h\" visible=\"visible\"><field name=\"TEXT\"></field></shadow>",
"ADD2": "<shadow type=\"text\" id=\"1MSSfOem2DuatTi7tahO\"><field name=\"TEXT\"/></shadow>",
"ADD3": "<shadow type=\"text\" id=\"SZgaEYQ6LY6wbeHRGlHi\"><field name=\"TEXT\"/></shadow>",
"ADD4": "<shadow type=\"text\" id=\"FBdJiPU0WAa9vVe39kc8\"><field name=\"TEXT\"/></shadow>",
"ADD5": "<shadow type=\"text\" id=\"VV8MefSdAV74q1M2sUBg\"><field name=\"TEXT\"/></shadow>",
"ADD6": "<shadow type=\"text\" id=\"vAk6DofEssn9zmJ33MUz\"><field name=\"TEXT\"/></shadow>",
"ADD7": "<shadow type=\"text\" id=\"o8KsBjLZcSDVwoPmIrqT\"><field name=\"TEXT\"/></shadow>",
"TITLE_TAIL": "",
"MUTATE_BUTTON": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"8\"></mutation>",
"is_output": true,
"parent_id": "JdLuebXf5nd7pLLHXqR7"
},
"vAk6DofEssn9zmJ33MUz": {
"type": "text",
"id": "vAk6DofEssn9zmJ33MUz",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "  size_ characters:"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
},
"h0rH7B32X34e3k3sj3Jk": {
"type": "get_3",
"id": "h0rH7B32X34e3k3sj3Jk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
893,
274
],
"shadows": {},
"fields": {
"attribute": "5",
"sprite": "835ca8ad-4613-433f-9692-99e474dc1ddd"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "sZUiQZ8FbbgoNKqOizTQ"
}
},
"connections": {
"cr51iaFbrNUdW60nqN3j": {
"dC2vXkmh9rbUgOvE6yUr": {
"type": "next"
}
},
"00vkI5pOXTYRaJU7O8ED": {},
"JdLuebXf5nd7pLLHXqR7": {
"00vkI5pOXTYRaJU7O8ED": {
"type": "input",
"input_type": "value",
"input_name": "size"
},
"sZUiQZ8FbbgoNKqOizTQ": {
"type": "input",
"input_type": "value",
"input_name": "text"
}
},
"pGG2HqyXiE3hKtKPcHBB": {
"JdLuebXf5nd7pLLHXqR7": {
"type": "next"
}
},
"dC2vXkmh9rbUgOvE6yUr": {
"pGG2HqyXiE3hKtKPcHBB": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"1MSSfOem2DuatTi7tahO": {},
"3fhryOpp8UCFY7Dbbqwe": {},
"5bYTz6j38tWOJw89QTV4": {},
"FBdJiPU0WAa9vVe39kc8": {},
"RaWL9or9esSQSVzUFsIl": {},
"p47xWG5QDp4sIUCWHIkl": {},
"sZUiQZ8FbbgoNKqOizTQ": {
"1MSSfOem2DuatTi7tahO": {
"type": "input",
"input_type": "value",
"input_name": "ADD2"
},
"3fhryOpp8UCFY7Dbbqwe": {
"type": "input",
"input_type": "value",
"input_name": "ADD5"
},
"5bYTz6j38tWOJw89QTV4": {
"type": "input",
"input_type": "value",
"input_name": "ADD1"
},
"FBdJiPU0WAa9vVe39kc8": {
"type": "input",
"input_type": "value",
"input_name": "ADD4"
},
"RaWL9or9esSQSVzUFsIl": {
"type": "input",
"input_type": "value",
"input_name": "ADD0"
},
"p47xWG5QDp4sIUCWHIkl": {
"type": "input",
"input_type": "value",
"input_name": "ADD3"
},
"vAk6DofEssn9zmJ33MUz": {
"type": "input",
"input_type": "value",
"input_name": "ADD6"
},
"h0rH7B32X34e3k3sj3Jk": {
"type": "input",
"input_type": "value",
"input_name": "ADD7"
}
},
"vAk6DofEssn9zmJ33MUz": {},
"h0rH7B32X34e3k3sj3Jk": {}
},
"comments": {}
}
},
{
"id": "a229703c-f45c-418f-8d34-aa1deccddf8c",
"name": "时间",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 195,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "a2e2c343-3c77-43ec-87e0-a765d844c18e",
"costumes": {
"a2e2c343-3c77-43ec-87e0-a765d844c18e": {
"asset": "assets/a2e2c343-3c77-43ec-87e0-a765d844c18e.svg",
"name": "速度",
"pivot": {
"x": -16.42434161018093,
"y": -53.618546141408046
},
"rotateCenter": {
"x": -16.42434161018093,
"y": -53.618546141408046
}
}
},
"scripts": {
"blocks": {
"08CYvFh9tDT0r0U50rhW": {
"type": "sprite_on_tap",
"id": "08CYvFh9tDT0r0U50rhW",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
66.66667175292969,
24.777576446533203
]
},
"KYtaLk04QKvIcDATuxE1": {
"type": "on_keydown",
"id": "KYtaLk04QKvIcDATuxE1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "65"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
164.44444274902344,
314.7775573730469
]
},
"VQnmefzKIJGa0f4rxcXG": {
"type": "controls_if",
"id": "VQnmefzKIJGa0f4rxcXG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eIV7clX5E6KjSkYd0glh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
257.77777099609375,
401.44427490234375
],
"parent_id": "BV8H1qf5QvF5VNDFDqir"
},
"8NlIgBeHdFQCd7Fe08NI": {
"type": "variables_get",
"id": "8NlIgBeHdFQCd7Fe08NI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
23.333335876464844,
524.7713623046875
],
"parent_id": "oW0vlT1vAeIvQQIh2vyg"
},
"KwGLU8ERpNQAuiwE94S1": {
"type": "math_number",
"id": "KwGLU8ERpNQAuiwE94S1",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "oW0vlT1vAeIvQQIh2vyg"
},
"oW0vlT1vAeIvQQIh2vyg": {
"type": "logic_compare",
"id": "oW0vlT1vAeIvQQIh2vyg",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"NcTFkacoPyLORVRRFAvS\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"KwGLU8ERpNQAuiwE94S1\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
85.55555725097656,
586.3331298828125
],
"parent_id": "VQnmefzKIJGa0f4rxcXG"
},
"FSKjz8PRcHXiL134Vcdb": {
"type": "change_variable",
"id": "FSKjz8PRcHXiL134Vcdb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-34.44444274902344,
586.3263549804688
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"Wy0Tgz8fwGtNupxTenBY\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"valname": "95af2bb3-bb76-48c1-ba3e-885373996f1b",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "VQnmefzKIJGa0f4rxcXG"
},
"Wy0Tgz8fwGtNupxTenBY": {
"type": "math_number",
"id": "Wy0Tgz8fwGtNupxTenBY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FSKjz8PRcHXiL134Vcdb"
},
"LmleSCPUjM4c7BEdNxf1": {
"type": "variables_set",
"id": "LmleSCPUjM4c7BEdNxf1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-34.44444274902344,
532.9931030273438
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"tPXXSdKXhPGdMigfmSaK\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "VQnmefzKIJGa0f4rxcXG"
},
"tPXXSdKXhPGdMigfmSaK": {
"type": "math_number",
"id": "tPXXSdKXhPGdMigfmSaK",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "LmleSCPUjM4c7BEdNxf1"
},
"AbT4dXK5eu5eCy8gXmSo": {
"type": "set_timer_state",
"id": "AbT4dXK5eu5eCy8gXmSo",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
518.888916015625,
692.11083984375
],
"parent_id": "VQnmefzKIJGa0f4rxcXG"
},
"BV8H1qf5QvF5VNDFDqir": {
"type": "controls_if",
"id": "BV8H1qf5QvF5VNDFDqir",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"PDbRJ3ZfpS4C7KJMJf2b\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
250,
398.11090087890625
],
"parent_id": "KYtaLk04QKvIcDATuxE1"
},
"nNvTTn5SNYbXEUoiTmlA": {
"type": "get_timer",
"id": "nNvTTn5SNYbXEUoiTmlA",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
151.11111450195312,
682.3331909179688
],
"parent_id": "9R11ozrkXbbTIrnyovOj"
},
"WR8sLNqT5WbZetd7M3IF": {
"type": "show_hide_timer",
"id": "WR8sLNqT5WbZetd7M3IF",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"state": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
334.4444580078125,
198.11090087890625
],
"parent_id": "wToFYs49d1ECBPtDk2oo"
},
"wToFYs49d1ECBPtDk2oo": {
"type": "on_running_group_activated",
"id": "wToFYs49d1ECBPtDk2oo",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
341.1111145019531,
48.11094665527344
]
},
"9R11ozrkXbbTIrnyovOj": {
"type": "logic_compare",
"id": "9R11ozrkXbbTIrnyovOj",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9vBP0ICRb5wjZPOKnHri\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"1u0M1vnJNddU0USCNkzs\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
115.55555725097656,
645.2220458984375
],
"parent_id": "BV8H1qf5QvF5VNDFDqir"
},
"1u0M1vnJNddU0USCNkzs": {
"type": "math_number",
"id": "1u0M1vnJNddU0USCNkzs",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "9R11ozrkXbbTIrnyovOj"
},
"zaw0WeZdZuD0eYUjoLjr": {
"type": "set_timer_state",
"id": "zaw0WeZdZuD0eYUjoLjr",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
153,
630
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "AbT4dXK5eu5eCy8gXmSo"
},
"ndK7bZ3E4ChVKC0sQbTV": {
"type": "set_timer_state",
"id": "ndK7bZ3E4ChVKC0sQbTV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "WR8sLNqT5WbZetd7M3IF"
},
"XvfUjgeymvJCMVwkHzji": {
"type": "math_number",
"id": "XvfUjgeymvJCMVwkHzji",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "viIhCuTj1mEhq7vTxBtB"
},
"viIhCuTj1mEhq7vTxBtB": {
"type": "wait",
"id": "viIhCuTj1mEhq7vTxBtB",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
474.1109619140625
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"XvfUjgeymvJCMVwkHzji\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "ndK7bZ3E4ChVKC0sQbTV"
},
"ZqiYpDOnoZfKEgtLokR3": {
"type": "set_timer_state",
"id": "ZqiYpDOnoZfKEgtLokR3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "stop"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "viIhCuTj1mEhq7vTxBtB"
},
"05pIPTFW4sm5wrIBXqLf": {
"type": "variables_get",
"id": "05pIPTFW4sm5wrIBXqLf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Ay0tM7qFbVp8DeVD8DWd"
},
"AVHrXkayYsj0Q3GCTc22": {
"type": "math_number",
"id": "AVHrXkayYsj0Q3GCTc22",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EDz9GK6sjFv1iDte3FeZ"
},
"Ay0tM7qFbVp8DeVD8DWd": {
"type": "logic_compare",
"id": "Ay0tM7qFbVp8DeVD8DWd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"SZs6dlhP8o4PoPFndgiq\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"yikTa0N1l1k8R362JcGd\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0.1</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "LISgyFn6cRYM8XAtVxQt"
},
"DAE4wxX3dQQ1Bf9EEOqZ": {
"type": "set_timer_state",
"id": "DAE4wxX3dQQ1Bf9EEOqZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "yfFVITvPXSD5Z3HdwzjQ"
},
"EDz9GK6sjFv1iDte3FeZ": {
"type": "logic_compare",
"id": "EDz9GK6sjFv1iDte3FeZ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"uV764S73JuE4HwlvvxLj\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"AVHrXkayYsj0Q3GCTc22\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0.1</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "U6zyNKx9dEmuvXMlrePN"
},
"FnQWd5GzoQqLETE01cuS": {
"type": "get_timer",
"id": "FnQWd5GzoQqLETE01cuS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "EDz9GK6sjFv1iDte3FeZ"
},
"JpSKpVSEhGTmSU7vVxzq": {
"type": "math_number",
"id": "JpSKpVSEhGTmSU7vVxzq",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.2"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xctLYAjk26J342P6MGez"
},
"LISgyFn6cRYM8XAtVxQt": {
"type": "controls_if",
"id": "LISgyFn6cRYM8XAtVxQt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"UjPVM0tplys5eaiS9OQ2\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "U6zyNKx9dEmuvXMlrePN"
},
"U6zyNKx9dEmuvXMlrePN": {
"type": "controls_if",
"id": "U6zyNKx9dEmuvXMlrePN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
260,
547
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"nMbwnf2gmtMw0e1Y4tIh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "08CYvFh9tDT0r0U50rhW"
},
"mN0SGHyu0u5tD9Kt09aX": {
"type": "math_number",
"id": "mN0SGHyu0u5tD9Kt09aX",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "yN2aB1L3A5nyvucUVJ7d"
},
"xctLYAjk26J342P6MGez": {
"type": "change_variable",
"id": "xctLYAjk26J342P6MGez",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"n": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"JpSKpVSEhGTmSU7vVxzq\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0.2</field></shadow>"
},
"fields": {
"valname": "95af2bb3-bb76-48c1-ba3e-885373996f1b",
"method": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "LISgyFn6cRYM8XAtVxQt"
},
"yN2aB1L3A5nyvucUVJ7d": {
"type": "variables_set",
"id": "yN2aB1L3A5nyvucUVJ7d",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"mN0SGHyu0u5tD9Kt09aX\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">1</field></shadow>"
},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "LISgyFn6cRYM8XAtVxQt"
},
"yfFVITvPXSD5Z3HdwzjQ": {
"type": "set_timer_state",
"id": "yfFVITvPXSD5Z3HdwzjQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "LISgyFn6cRYM8XAtVxQt"
},
"yikTa0N1l1k8R362JcGd": {
"type": "math_number",
"id": "yikTa0N1l1k8R362JcGd",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Ay0tM7qFbVp8DeVD8DWd"
},
"FSytsmhF5oCcY9AbOjS3": {
"type": "self_listen",
"id": "FSytsmhF5oCcY9AbOjS3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
582.4537353515625,
139.44447326660156
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"jwRGWpoOsVok1Swmzomn\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"JKH3h18PFlhG5n8jgiJ8": {
"type": "self_disappear",
"id": "JKH3h18PFlhG5n8jgiJ8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "FSytsmhF5oCcY9AbOjS3"
},
"JrJFHldcac29blYnTjZQ": {
"type": "self_appear",
"id": "JrJFHldcac29blYnTjZQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "KUND3zC6BA72MW9bvnfw"
},
"KUND3zC6BA72MW9bvnfw": {
"type": "self_listen",
"id": "KUND3zC6BA72MW9bvnfw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
630.4537353515625,
235.44447326660156
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"s5NnJrK7uWETO7o77qIZ\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"jwRGWpoOsVok1Swmzomn": {
"type": "broadcast_input",
"id": "jwRGWpoOsVok1Swmzomn",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FSytsmhF5oCcY9AbOjS3"
},
"s5NnJrK7uWETO7o77qIZ": {
"type": "broadcast_input",
"id": "s5NnJrK7uWETO7o77qIZ",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "KUND3zC6BA72MW9bvnfw"
}
},
"connections": {
"08CYvFh9tDT0r0U50rhW": {
"U6zyNKx9dEmuvXMlrePN": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"KYtaLk04QKvIcDATuxE1": {
"BV8H1qf5QvF5VNDFDqir": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"VQnmefzKIJGa0f4rxcXG": {
"oW0vlT1vAeIvQQIh2vyg": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"FSKjz8PRcHXiL134Vcdb": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"LmleSCPUjM4c7BEdNxf1": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"AbT4dXK5eu5eCy8gXmSo": {
"type": "next"
}
},
"8NlIgBeHdFQCd7Fe08NI": {},
"KwGLU8ERpNQAuiwE94S1": {},
"oW0vlT1vAeIvQQIh2vyg": {
"KwGLU8ERpNQAuiwE94S1": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"8NlIgBeHdFQCd7Fe08NI": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"FSKjz8PRcHXiL134Vcdb": {
"Wy0Tgz8fwGtNupxTenBY": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"Wy0Tgz8fwGtNupxTenBY": {},
"LmleSCPUjM4c7BEdNxf1": {
"tPXXSdKXhPGdMigfmSaK": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"tPXXSdKXhPGdMigfmSaK": {},
"AbT4dXK5eu5eCy8gXmSo": {
"zaw0WeZdZuD0eYUjoLjr": {
"type": "next"
}
},
"BV8H1qf5QvF5VNDFDqir": {
"VQnmefzKIJGa0f4rxcXG": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"9R11ozrkXbbTIrnyovOj": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
},
"nNvTTn5SNYbXEUoiTmlA": {},
"WR8sLNqT5WbZetd7M3IF": {
"ndK7bZ3E4ChVKC0sQbTV": {
"type": "next"
}
},
"wToFYs49d1ECBPtDk2oo": {
"WR8sLNqT5WbZetd7M3IF": {
"type": "next"
}
},
"9R11ozrkXbbTIrnyovOj": {
"1u0M1vnJNddU0USCNkzs": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"nNvTTn5SNYbXEUoiTmlA": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"1u0M1vnJNddU0USCNkzs": {},
"zaw0WeZdZuD0eYUjoLjr": {},
"ndK7bZ3E4ChVKC0sQbTV": {
"viIhCuTj1mEhq7vTxBtB": {
"type": "next"
}
},
"XvfUjgeymvJCMVwkHzji": {},
"viIhCuTj1mEhq7vTxBtB": {
"XvfUjgeymvJCMVwkHzji": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"ZqiYpDOnoZfKEgtLokR3": {
"type": "next"
}
},
"ZqiYpDOnoZfKEgtLokR3": {},
"05pIPTFW4sm5wrIBXqLf": {},
"AVHrXkayYsj0Q3GCTc22": {},
"Ay0tM7qFbVp8DeVD8DWd": {
"05pIPTFW4sm5wrIBXqLf": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"yikTa0N1l1k8R362JcGd": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"DAE4wxX3dQQ1Bf9EEOqZ": {},
"EDz9GK6sjFv1iDte3FeZ": {
"AVHrXkayYsj0Q3GCTc22": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"FnQWd5GzoQqLETE01cuS": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"FnQWd5GzoQqLETE01cuS": {},
"JpSKpVSEhGTmSU7vVxzq": {},
"LISgyFn6cRYM8XAtVxQt": {
"Ay0tM7qFbVp8DeVD8DWd": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"xctLYAjk26J342P6MGez": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"yN2aB1L3A5nyvucUVJ7d": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"yfFVITvPXSD5Z3HdwzjQ": {
"type": "next"
}
},
"U6zyNKx9dEmuvXMlrePN": {
"EDz9GK6sjFv1iDte3FeZ": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"LISgyFn6cRYM8XAtVxQt": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"mN0SGHyu0u5tD9Kt09aX": {},
"xctLYAjk26J342P6MGez": {
"JpSKpVSEhGTmSU7vVxzq": {
"type": "input",
"input_type": "value",
"input_name": "n"
}
},
"yN2aB1L3A5nyvucUVJ7d": {
"mN0SGHyu0u5tD9Kt09aX": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"yfFVITvPXSD5Z3HdwzjQ": {
"DAE4wxX3dQQ1Bf9EEOqZ": {
"type": "next"
}
},
"yikTa0N1l1k8R362JcGd": {},
"FSytsmhF5oCcY9AbOjS3": {
"JKH3h18PFlhG5n8jgiJ8": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"jwRGWpoOsVok1Swmzomn": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"JKH3h18PFlhG5n8jgiJ8": {},
"JrJFHldcac29blYnTjZQ": {},
"KUND3zC6BA72MW9bvnfw": {
"JrJFHldcac29blYnTjZQ": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"s5NnJrK7uWETO7o77qIZ": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"jwRGWpoOsVok1Swmzomn": {},
"s5NnJrK7uWETO7o77qIZ": {}
},
"comments": {}
}
},
{
"id": "bfe102f5-ec78-48a2-86b3-e0f84192fef3",
"name": "新角色(13)",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 262.9130515040754,
"y": 295.88012695312443,
"scale": 49.16577452167172,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "82245bba-aee8-4f95-aecc-95daa203b37a",
"costumes": {
"82245bba-aee8-4f95-aecc-95daa203b37a": {
"asset": "assets/82245bba-aee8-4f95-aecc-95daa203b37a.svg",
"name": "新角色(13)",
"pivot": {
"x": 0,
"y": 0
},
"rotateCenter": {
"x": 0,
"y": 0
}
}
},
"scripts": {
"blocks": {
"5y2VCS0rGhoCEVmfZCcR": {
"type": "self_listen",
"id": "5y2VCS0rGhoCEVmfZCcR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"hqFGZuwNC7dZg63bSyN7\" visible=\"visible\"><field name=\"MESSAGE\">人物还原</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
137.77781677246094,
694.221923828125
]
},
"hqFGZuwNC7dZg63bSyN7": {
"type": "broadcast_input",
"id": "hqFGZuwNC7dZg63bSyN7",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "5y2VCS0rGhoCEVmfZCcR"
},
"Faqkap2zyIuPcS064sYU": {
"type": "self_disappear",
"id": "Faqkap2zyIuPcS064sYU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.22225570678711,
240.8887176513672
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "5y2VCS0rGhoCEVmfZCcR"
},
"AQLi2bnh6zEf5XWqwrCE": {
"type": "broadcast_input",
"id": "AQLi2bnh6zEf5XWqwrCE",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "bUI7fhYy25HLExpJUQm9"
},
"bUI7fhYy25HLExpJUQm9": {
"type": "self_listen",
"id": "bUI7fhYy25HLExpJUQm9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
186,
790
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"AQLi2bnh6zEf5XWqwrCE\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"lsdK7oNijP45SBSj1GLP": {
"type": "self_appear",
"id": "lsdK7oNijP45SBSj1GLP",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
12.22225570678711,
187.55540466308594
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "bUI7fhYy25HLExpJUQm9"
},
"5MDtIlg6wM5ASAVnv1o8": {
"type": "clear_drawing",
"id": "5MDtIlg6wM5ASAVnv1o8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "xe7b8U9GsMgDSYIci8sz"
},
"8GsfHD6sWBNzaWfnxxlY": {
"type": "math_number",
"id": "8GsfHD6sWBNzaWfnxxlY",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "xe7b8U9GsMgDSYIci8sz"
},
"D8eLTM5e94xPFC0R8DKr": {
"type": "self_set_pen_color",
"id": "D8eLTM5e94xPFC0R8DKr",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"color": "#FDFF03"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "Rue5OqzymAo9bVO0oMBN"
},
"DEJqJXpQPaG3sI5VSQuV": {
"type": "text",
"id": "DEJqJXpQPaG3sI5VSQuV",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"TEXT": "下面的按钮都是可以控制难度的哦               "
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "mLhe2htlkO4lKXrND8Pn"
},
"Rue5OqzymAo9bVO0oMBN": {
"type": "sprite_on_tap",
"id": "Rue5OqzymAo9bVO0oMBN",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
158.88890075683594,
117.55535125732422
],
"shadows": {
"DO": ""
},
"fields": {
"actor": "bfe102f5-ec78-48a2-86b3-e0f84192fef3",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"mLhe2htlkO4lKXrND8Pn": {
"type": "stamp",
"id": "mLhe2htlkO4lKXrND8Pn",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"text": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"text\" id=\"DEJqJXpQPaG3sI5VSQuV\" visible=\"visible\"><field name=\"TEXT\">Hello</field></shadow>",
"size": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"xp5gzqWf6Rn2MrGZdR5R\" visible=\"visible\"><field constraints=\"1,10000,0,\" name=\"NUM\">24</field></shadow>"
},
"fields": {
"align": "right"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "D8eLTM5e94xPFC0R8DKr"
},
"xe7b8U9GsMgDSYIci8sz": {
"type": "wait",
"id": "xe7b8U9GsMgDSYIci8sz",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"8GsfHD6sWBNzaWfnxxlY\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "mLhe2htlkO4lKXrND8Pn"
},
"xp5gzqWf6Rn2MrGZdR5R": {
"type": "math_number",
"id": "xp5gzqWf6Rn2MrGZdR5R",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "12"
},
"field_constraints": {
"NUM": {
"min": 1,
"max": 10000,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "mLhe2htlkO4lKXrND8Pn"
}
},
"connections": {
"5y2VCS0rGhoCEVmfZCcR": {
"hqFGZuwNC7dZg63bSyN7": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"Faqkap2zyIuPcS064sYU": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"hqFGZuwNC7dZg63bSyN7": {},
"Faqkap2zyIuPcS064sYU": {},
"AQLi2bnh6zEf5XWqwrCE": {},
"bUI7fhYy25HLExpJUQm9": {
"AQLi2bnh6zEf5XWqwrCE": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"lsdK7oNijP45SBSj1GLP": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"lsdK7oNijP45SBSj1GLP": {},
"5MDtIlg6wM5ASAVnv1o8": {},
"8GsfHD6sWBNzaWfnxxlY": {},
"D8eLTM5e94xPFC0R8DKr": {
"mLhe2htlkO4lKXrND8Pn": {
"type": "next"
}
},
"DEJqJXpQPaG3sI5VSQuV": {},
"Rue5OqzymAo9bVO0oMBN": {
"D8eLTM5e94xPFC0R8DKr": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"mLhe2htlkO4lKXrND8Pn": {
"DEJqJXpQPaG3sI5VSQuV": {
"type": "input",
"input_type": "value",
"input_name": "text"
},
"xe7b8U9GsMgDSYIci8sz": {
"type": "next"
},
"xp5gzqWf6Rn2MrGZdR5R": {
"type": "input",
"input_type": "value",
"input_name": "size"
}
},
"xe7b8U9GsMgDSYIci8sz": {
"5MDtIlg6wM5ASAVnv1o8": {
"type": "next"
},
"8GsfHD6sWBNzaWfnxxlY": {
"type": "input",
"input_type": "value",
"input_name": "time"
}
},
"xp5gzqWf6Rn2MrGZdR5R": {}
},
"comments": {}
}
},
{
"id": "8404e451-6e80-4af0-8451-747612f1aa6c",
"name": "方块大小",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 130.00000000000006,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "1ea9c27d-8a37-4752-977c-81b30874ae60",
"costumes": {
"1ea9c27d-8a37-4752-977c-81b30874ae60": {
"asset": "assets/1ea9c27d-8a37-4752-977c-81b30874ae60.svg",
"name": "速度",
"pivot": {
"x": -12.923622755606402,
"y": -57.76746719155511
},
"rotateCenter": {
"x": -12.923622755606402,
"y": -57.76746719155511
}
}
},
"scripts": {
"blocks": {
"UGLX0IIbFgofoPCtVlyR": {
"type": "sprite_on_tap",
"id": "UGLX0IIbFgofoPCtVlyR",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
66.66667175292969,
24.777576446533203
]
},
"olZcT6Up9oSfU8aWAidd": {
"type": "on_keydown",
"id": "olZcT6Up9oSfU8aWAidd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "70"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
203.33331298828125,
269.22198486328125
]
},
"XG5tzkdCGUn5VG2zqAbp": {
"type": "controls_if",
"id": "XG5tzkdCGUn5VG2zqAbp",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eIV7clX5E6KjSkYd0glh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
257.77777099609375,
401.44427490234375
],
"parent_id": "pGHqNyYBNGIDFsqOF9Ds"
},
"sfXq12vwol4CqBuoHsZT": {
"type": "variables_get",
"id": "sfXq12vwol4CqBuoHsZT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": null,
"location": [
371.33331298828125,
458.22198486328125
]
},
"tCtLNEMCyjwDbHWHKK8O": {
"type": "math_number",
"id": "tCtLNEMCyjwDbHWHKK8O",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "15"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "0NE7mivuI7jTrkgH70xG"
},
"0NE7mivuI7jTrkgH70xG": {
"type": "logic_compare",
"id": "0NE7mivuI7jTrkgH70xG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"NcTFkacoPyLORVRRFAvS\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"tCtLNEMCyjwDbHWHKK8O\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
85.55555725097656,
586.3331298828125
],
"parent_id": "XG5tzkdCGUn5VG2zqAbp"
},
"CexCeFh1SzcKE5Y9jFI8": {
"type": "variables_set",
"id": "CexCeFh1SzcKE5Y9jFI8",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"I45JbyAJa1L7dKlXlS7U\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
469.77777099609375,
642.999755859375
],
"parent_id": null
},
"I45JbyAJa1L7dKlXlS7U": {
"type": "math_number",
"id": "I45JbyAJa1L7dKlXlS7U",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "CexCeFh1SzcKE5Y9jFI8"
},
"COf0kePWqZ19K5en3jgC": {
"type": "set_timer_state",
"id": "COf0kePWqZ19K5en3jgC",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
518.888916015625,
692.11083984375
],
"parent_id": "XG5tzkdCGUn5VG2zqAbp"
},
"pGHqNyYBNGIDFsqOF9Ds": {
"type": "controls_if",
"id": "pGHqNyYBNGIDFsqOF9Ds",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"PDbRJ3ZfpS4C7KJMJf2b\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
250,
398.11090087890625
],
"parent_id": "olZcT6Up9oSfU8aWAidd"
},
"ekMLoCAW6D8t2h6FuGry": {
"type": "get_timer",
"id": "ekMLoCAW6D8t2h6FuGry",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
151.11111450195312,
682.3331909179688
],
"parent_id": "cnyRN4qDq911qauxGH2j"
},
"QGAbXmaSVlr9V8mXYUy7": {
"type": "show_hide_timer",
"id": "QGAbXmaSVlr9V8mXYUy7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"state": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
334.4444580078125,
198.11090087890625
],
"parent_id": "yU39AIqt5nmfz8J8Ojwm"
},
"yU39AIqt5nmfz8J8Ojwm": {
"type": "on_running_group_activated",
"id": "yU39AIqt5nmfz8J8Ojwm",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
341.1111145019531,
48.11094665527344
]
},
"cnyRN4qDq911qauxGH2j": {
"type": "logic_compare",
"id": "cnyRN4qDq911qauxGH2j",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9vBP0ICRb5wjZPOKnHri\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"8UVBCCEUAD0hQ54M0odN\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
115.55555725097656,
645.2220458984375
],
"parent_id": "pGHqNyYBNGIDFsqOF9Ds"
},
"8UVBCCEUAD0hQ54M0odN": {
"type": "math_number",
"id": "8UVBCCEUAD0hQ54M0odN",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "cnyRN4qDq911qauxGH2j"
},
"hSxhCzz6H1WVUtybibmI": {
"type": "set_timer_state",
"id": "hSxhCzz6H1WVUtybibmI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
153,
630
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "COf0kePWqZ19K5en3jgC"
},
"d749gqi7sULsUCtvkdT2": {
"type": "set_timer_state",
"id": "d749gqi7sULsUCtvkdT2",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "QGAbXmaSVlr9V8mXYUy7"
},
"8Dk0faNEemCvSg2kSVr9": {
"type": "math_number",
"id": "8Dk0faNEemCvSg2kSVr9",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "qOXO16FcK7mVeazVXYR6"
},
"qOXO16FcK7mVeazVXYR6": {
"type": "wait",
"id": "qOXO16FcK7mVeazVXYR6",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
474.1109619140625
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"8Dk0faNEemCvSg2kSVr9\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "d749gqi7sULsUCtvkdT2"
},
"XK702xtGHzsn558ECPJx": {
"type": "set_timer_state",
"id": "XK702xtGHzsn558ECPJx",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "stop"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "qOXO16FcK7mVeazVXYR6"
},
"hiStLWILpBiwucRjptoS": {
"type": "get_3",
"id": "hiStLWILpBiwucRjptoS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"sprite": "921e60b7-e6d0-45b4-b5d6-614b708bd057",
"attribute": "5"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
519.3333129882812,
326.3330993652344
],
"parent_id": "0NE7mivuI7jTrkgH70xG"
},
"3elWD9mxDm0LpVVnMqKW": {
"type": "self_broadcast",
"id": "3elWD9mxDm0LpVVnMqKW",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
524.7775268554688
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"LZzbV0BNjVjJrD3aAyLf\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "XG5tzkdCGUn5VG2zqAbp"
},
"LZzbV0BNjVjJrD3aAyLf": {
"type": "broadcast_input",
"id": "LZzbV0BNjVjJrD3aAyLf",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "方块减小"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "3elWD9mxDm0LpVVnMqKW"
},
"POlskshJ0N1OJ4PBaHzG": {
"type": "broadcast_input",
"id": "POlskshJ0N1OJ4PBaHzG",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "方块还原"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "gVIxVNQL46WDXsxC6FM1"
},
"gVIxVNQL46WDXsxC6FM1": {
"type": "self_broadcast",
"id": "gVIxVNQL46WDXsxC6FM1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
283,
501
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"POlskshJ0N1OJ4PBaHzG\" visible=\"visible\"><field name=\"MESSAGE\">方块减小</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "XG5tzkdCGUn5VG2zqAbp"
},
"M6HRbGU9lFrxXNdskWQT": {
"type": "broadcast_input",
"id": "M6HRbGU9lFrxXNdskWQT",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "WLRtFfE2TKMjIK359QGy"
},
"SuqFFFgfi3NuGRR8vRmH": {
"type": "broadcast_input",
"id": "SuqFFFgfi3NuGRR8vRmH",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "pnzzIwJ0xlqEv8EYNd0X"
},
"WLRtFfE2TKMjIK359QGy": {
"type": "self_listen",
"id": "WLRtFfE2TKMjIK359QGy",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
600.2315063476562,
71.66670227050781
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"M6HRbGU9lFrxXNdskWQT\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"lXiYQUeEfWNLBOhObX1P": {
"type": "self_appear",
"id": "lXiYQUeEfWNLBOhObX1P",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "pnzzIwJ0xlqEv8EYNd0X"
},
"pnzzIwJ0xlqEv8EYNd0X": {
"type": "self_listen",
"id": "pnzzIwJ0xlqEv8EYNd0X",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
648.2315063476562,
167.6667022705078
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"SuqFFFgfi3NuGRR8vRmH\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"wNrXhmABldP8gs4SlAWf": {
"type": "self_disappear",
"id": "wNrXhmABldP8gs4SlAWf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "WLRtFfE2TKMjIK359QGy"
}
},
"connections": {
"UGLX0IIbFgofoPCtVlyR": {},
"olZcT6Up9oSfU8aWAidd": {
"pGHqNyYBNGIDFsqOF9Ds": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"XG5tzkdCGUn5VG2zqAbp": {
"0NE7mivuI7jTrkgH70xG": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"COf0kePWqZ19K5en3jgC": {
"type": "next"
},
"3elWD9mxDm0LpVVnMqKW": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"gVIxVNQL46WDXsxC6FM1": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"sfXq12vwol4CqBuoHsZT": {},
"tCtLNEMCyjwDbHWHKK8O": {},
"0NE7mivuI7jTrkgH70xG": {
"tCtLNEMCyjwDbHWHKK8O": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"hiStLWILpBiwucRjptoS": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"CexCeFh1SzcKE5Y9jFI8": {
"I45JbyAJa1L7dKlXlS7U": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"I45JbyAJa1L7dKlXlS7U": {},
"COf0kePWqZ19K5en3jgC": {
"hSxhCzz6H1WVUtybibmI": {
"type": "next"
}
},
"pGHqNyYBNGIDFsqOF9Ds": {
"XG5tzkdCGUn5VG2zqAbp": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"cnyRN4qDq911qauxGH2j": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
},
"ekMLoCAW6D8t2h6FuGry": {},
"QGAbXmaSVlr9V8mXYUy7": {
"d749gqi7sULsUCtvkdT2": {
"type": "next"
}
},
"yU39AIqt5nmfz8J8Ojwm": {
"QGAbXmaSVlr9V8mXYUy7": {
"type": "next"
}
},
"cnyRN4qDq911qauxGH2j": {
"8UVBCCEUAD0hQ54M0odN": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"ekMLoCAW6D8t2h6FuGry": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"8UVBCCEUAD0hQ54M0odN": {},
"hSxhCzz6H1WVUtybibmI": {},
"d749gqi7sULsUCtvkdT2": {
"qOXO16FcK7mVeazVXYR6": {
"type": "next"
}
},
"8Dk0faNEemCvSg2kSVr9": {},
"qOXO16FcK7mVeazVXYR6": {
"8Dk0faNEemCvSg2kSVr9": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"XK702xtGHzsn558ECPJx": {
"type": "next"
}
},
"XK702xtGHzsn558ECPJx": {},
"hiStLWILpBiwucRjptoS": {},
"3elWD9mxDm0LpVVnMqKW": {
"LZzbV0BNjVjJrD3aAyLf": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"LZzbV0BNjVjJrD3aAyLf": {},
"POlskshJ0N1OJ4PBaHzG": {},
"gVIxVNQL46WDXsxC6FM1": {
"POlskshJ0N1OJ4PBaHzG": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"M6HRbGU9lFrxXNdskWQT": {},
"SuqFFFgfi3NuGRR8vRmH": {},
"WLRtFfE2TKMjIK359QGy": {
"M6HRbGU9lFrxXNdskWQT": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"wNrXhmABldP8gs4SlAWf": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"lXiYQUeEfWNLBOhObX1P": {},
"pnzzIwJ0xlqEv8EYNd0X": {
"SuqFFFgfi3NuGRR8vRmH": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"lXiYQUeEfWNLBOhObX1P": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"wNrXhmABldP8gs4SlAWf": {}
},
"comments": {}
}
},
{
"id": "9fd12f6a-b98c-4ed5-9567-6f94a14d6f3e",
"name": "人物大小",
"scene": "3eed1ea7-5aed-4d48-a039-9d0501f2cdf7",
"x": 270,
"y": 65,
"scale": 15,
"rotation": 0,
"rotationType": 0,
"visible": true,
"draggable": false,
"currentStyleId": "e2d1e8ec-f5e1-4d9a-abfc-c64256349aa1",
"costumes": {
"e2d1e8ec-f5e1-4d9a-abfc-c64256349aa1": {
"asset": "assets/e2d1e8ec-f5e1-4d9a-abfc-c64256349aa1.svg",
"name": "速度",
"pivot": {
"x": -24.050188767734085,
"y": -57.76746719155517
},
"rotateCenter": {
"x": -24.050188767734085,
"y": -57.76746719155517
}
}
},
"scripts": {
"blocks": {
"IrnaeoYIjGXZ4FQt6HrL": {
"type": "sprite_on_tap",
"id": "IrnaeoYIjGXZ4FQt6HrL",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"actor": "__self",
"type": "mouse_click"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
66.66667175292969,
24.777576446533203
]
},
"aDg3zOoFG2nfmfYu31lV": {
"type": "on_keydown",
"id": "aDg3zOoFG2nfmfYu31lV",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"DO": ""
},
"fields": {
"key_event_type": "down",
"key": "68"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
203.33331298828125,
269.22198486328125
]
},
"m0S0DL58yBqRhWm0E8uK": {
"type": "controls_if",
"id": "m0S0DL58yBqRhWm0E8uK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"eIV7clX5E6KjSkYd0glh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"location": [
257.77777099609375,
401.44427490234375
],
"parent_id": "JHdfIxqAlUDAJKd5UWNb"
},
"j5STTtP9Gqd2eWnZD6Kw": {
"type": "variables_get",
"id": "j5STTtP9Gqd2eWnZD6Kw",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": null,
"location": [
620.2222290039062,
445.9997863769531
]
},
"PtgYLAsDsXh0jhSMVdcP": {
"type": "math_number",
"id": "PtgYLAsDsXh0jhSMVdcP",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "15"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "iwi1dXjnOKHX4kiONNBf"
},
"iwi1dXjnOKHX4kiONNBf": {
"type": "logic_compare",
"id": "iwi1dXjnOKHX4kiONNBf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"NcTFkacoPyLORVRRFAvS\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"PtgYLAsDsXh0jhSMVdcP\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
85.55555725097656,
586.3331298828125
],
"parent_id": "m0S0DL58yBqRhWm0E8uK"
},
"Lkz1BfBgLfU17ZbYbuHq": {
"type": "variables_set",
"id": "Lkz1BfBgLfU17ZbYbuHq",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"VALUE": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"a4Hz2liNiYiRucy4RaxK\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"VAR": "95af2bb3-bb76-48c1-ba3e-885373996f1b"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
553.111083984375,
672.999755859375
],
"parent_id": null
},
"a4Hz2liNiYiRucy4RaxK": {
"type": "math_number",
"id": "a4Hz2liNiYiRucy4RaxK",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Lkz1BfBgLfU17ZbYbuHq"
},
"YK4XPTz12fFdD2eaTwrf": {
"type": "set_timer_state",
"id": "YK4XPTz12fFdD2eaTwrf",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
518.888916015625,
692.11083984375
],
"parent_id": "m0S0DL58yBqRhWm0E8uK"
},
"JHdfIxqAlUDAJKd5UWNb": {
"type": "controls_if",
"id": "JHdfIxqAlUDAJKd5UWNb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"PDbRJ3ZfpS4C7KJMJf2b\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
250,
398.11090087890625
],
"parent_id": "aDg3zOoFG2nfmfYu31lV"
},
"5ZXBg5aGK4K4HRJeshc7": {
"type": "get_timer",
"id": "5ZXBg5aGK4K4HRJeshc7",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
151.11111450195312,
682.3331909179688
],
"parent_id": "yjPVetvvGED6y0v8Fpc3"
},
"S1ZuAwarr8BikPTPIkcT": {
"type": "show_hide_timer",
"id": "S1ZuAwarr8BikPTPIkcT",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"state": "hide"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
334.4444580078125,
198.11090087890625
],
"parent_id": "QwA2oOK3ck95azEan0ow"
},
"QwA2oOK3ck95azEan0ow": {
"type": "on_running_group_activated",
"id": "QwA2oOK3ck95azEan0ow",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null,
"location": [
341.1111145019531,
48.11094665527344
]
},
"yjPVetvvGED6y0v8Fpc3": {
"type": "logic_compare",
"id": "yjPVetvvGED6y0v8Fpc3",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"9vBP0ICRb5wjZPOKnHri\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"4gTCAwzCYr81olKe20Lx\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
115.55555725097656,
645.2220458984375
],
"parent_id": "JHdfIxqAlUDAJKd5UWNb"
},
"4gTCAwzCYr81olKe20Lx": {
"type": "math_number",
"id": "4gTCAwzCYr81olKe20Lx",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "yjPVetvvGED6y0v8Fpc3"
},
"wCZkBloP9UaZzkgoiLDn": {
"type": "set_timer_state",
"id": "wCZkBloP9UaZzkgoiLDn",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
153,
630
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "YK4XPTz12fFdD2eaTwrf"
},
"V2orawc7CdI6cm8bljzk": {
"type": "set_timer_state",
"id": "V2orawc7CdI6cm8bljzk",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "S1ZuAwarr8BikPTPIkcT"
},
"nwIZL5sro1QNSmCj2WJC": {
"type": "math_number",
"id": "nwIZL5sro1QNSmCj2WJC",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "LdiZubkUcTTTE6TKulkd"
},
"LdiZubkUcTTTE6TKulkd": {
"type": "wait",
"id": "LdiZubkUcTTTE6TKulkd",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
474.1109619140625
],
"shadows": {
"time": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"nwIZL5sro1QNSmCj2WJC\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">1</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "V2orawc7CdI6cm8bljzk"
},
"IGevNPi9MLC6sWQ7Htq9": {
"type": "set_timer_state",
"id": "IGevNPi9MLC6sWQ7Htq9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
-29.99996566772461,
480.1109924316406
],
"shadows": {},
"fields": {
"actions": "stop"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "LdiZubkUcTTTE6TKulkd"
},
"6WBXZiC1y09zZrywu9sK": {
"type": "get_3",
"id": "6WBXZiC1y09zZrywu9sK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {},
"fields": {
"attribute": "5",
"sprite": "835ca8ad-4613-433f-9692-99e474dc1ddd"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"location": [
519.3333129882812,
326.3330993652344
],
"parent_id": "iwi1dXjnOKHX4kiONNBf"
},
"Urwub1yE56uMx1mCy6P5": {
"type": "self_broadcast",
"id": "Urwub1yE56uMx1mCy6P5",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"NrBo7egY5F3KVzicgFmA\" visible=\"visible\"><field name=\"MESSAGE\">隐藏排行榜按钮</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
597.5555419921875,
480.77752685546875
],
"parent_id": "m0S0DL58yBqRhWm0E8uK"
},
"NrBo7egY5F3KVzicgFmA": {
"type": "broadcast_input",
"id": "NrBo7egY5F3KVzicgFmA",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物减小"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "Urwub1yE56uMx1mCy6P5"
},
"QIZ2bG4WUV0yY2oAkZGU": {
"type": "broadcast_input",
"id": "QIZ2bG4WUV0yY2oAkZGU",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物还原"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "tGKblMeEQty2gPSNMCSO"
},
"tGKblMeEQty2gPSNMCSO": {
"type": "self_broadcast",
"id": "tGKblMeEQty2gPSNMCSO",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"QIZ2bG4WUV0yY2oAkZGU\" visible=\"visible\"><field name=\"MESSAGE\">方块减小</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
239.7777557373047,
484.11090087890625
],
"parent_id": "m0S0DL58yBqRhWm0E8uK"
},
"FYKtqdn79YxRk5HuH1Vs": {
"type": "self_change_scale_2",
"id": "FYKtqdn79YxRk5HuH1Vs",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"f9utR7BSGpdMhchTcpgi\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" name=\"NUM\">10</field></shadow>"
},
"fields": {
"increase": "decrease"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
590.8888549804688,
200.7775421142578
],
"parent_id": null
},
"f9utR7BSGpdMhchTcpgi": {
"type": "math_number",
"id": "f9utR7BSGpdMhchTcpgi",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "5"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "FYKtqdn79YxRk5HuH1Vs"
},
"0B1gs1XVO5BYhl2DuRUI": {
"type": "set_scale",
"id": "0B1gs1XVO5BYhl2DuRUI",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"shadows": {
"scale": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"3PmBXhDjOJQcHINREqLX\" visible=\"visible\"><field constraints=\"0,Infinity,0,\" name=\"NUM\">100</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"location": [
489.7777099609375,
564.1109008789062
],
"parent_id": null
},
"3PmBXhDjOJQcHINREqLX": {
"type": "math_number",
"id": "3PmBXhDjOJQcHINREqLX",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "50"
},
"field_constraints": {
"NUM": {
"min": 0,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "0B1gs1XVO5BYhl2DuRUI"
},
"FboMm86UnbDXvUawuCdw": {
"type": "broadcast_input",
"id": "FboMm86UnbDXvUawuCdw",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物还原"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "JgZxa5BOj6TwpmKIYSw1"
},
"HKgxT3lkC7K0XzrVMcy9": {
"type": "get_3",
"id": "HKgxT3lkC7K0XzrVMcy9",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"sprite": "835ca8ad-4613-433f-9692-99e474dc1ddd",
"attribute": "5"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "O3QmjZLEEvDGt4yJCwpK"
},
"JAjD1s4AVY330MV5hFVk": {
"type": "broadcast_input",
"id": "JAjD1s4AVY330MV5hFVk",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "人物减小"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "LqxDEYLmlgwFy32L1FFp"
},
"JgZxa5BOj6TwpmKIYSw1": {
"type": "self_broadcast",
"id": "JgZxa5BOj6TwpmKIYSw1",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"FboMm86UnbDXvUawuCdw\" visible=\"visible\"><field name=\"MESSAGE\">人物还原</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "zhY8twlCRbIgA2s0pPCb"
},
"JmuoF3vGsNkuhtwJFwzq": {
"type": "set_timer_state",
"id": "JmuoF3vGsNkuhtwJFwzq",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "start"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "fiIeIHGHOgd0TAh9qGeD"
},
"LqxDEYLmlgwFy32L1FFp": {
"type": "self_broadcast",
"id": "LqxDEYLmlgwFy32L1FFp",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"JAjD1s4AVY330MV5hFVk\" visible=\"visible\"><field name=\"MESSAGE\">人物减小</field></shadow>"
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "zhY8twlCRbIgA2s0pPCb"
},
"O3QmjZLEEvDGt4yJCwpK": {
"type": "logic_compare",
"id": "O3QmjZLEEvDGt4yJCwpK",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"KDUmRrp9JDIDDK5Gxmhb\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"a0httAEtVrsi4J4G7rwj\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">15</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zhY8twlCRbIgA2s0pPCb"
},
"ZgDCDiwBWh4KYeP6dgyX": {
"type": "controls_if",
"id": "ZgDCDiwBWh4KYeP6dgyX",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
299,
501
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"82z6zCQm3ylVCr08EYO4\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"EXTRA_ADD_ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "IrnaeoYIjGXZ4FQt6HrL"
},
"a0httAEtVrsi4J4G7rwj": {
"type": "math_number",
"id": "a0httAEtVrsi4J4G7rwj",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "15"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "O3QmjZLEEvDGt4yJCwpK"
},
"bHiSO44rXEv5u6oQcZeQ": {
"type": "get_timer",
"id": "bHiSO44rXEv5u6oQcZeQ",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zEUjUbxVQ6zvH70Cy3cU"
},
"eT8zvwq1Gl7qwHd2N2sq": {
"type": "math_number",
"id": "eT8zvwq1Gl7qwHd2N2sq",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"NUM": "0.1"
},
"field_constraints": {
"NUM": {
"min": null,
"max": null,
"precision": 0,
"mod": null
}
},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "zEUjUbxVQ6zvH70Cy3cU"
},
"fiIeIHGHOgd0TAh9qGeD": {
"type": "set_timer_state",
"id": "fiIeIHGHOgd0TAh9qGeD",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"actions": "reset"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "zhY8twlCRbIgA2s0pPCb"
},
"zEUjUbxVQ6zvH70Cy3cU": {
"type": "logic_compare",
"id": "zEUjUbxVQ6zvH70Cy3cU",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"A": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"E4D8qMbUBuCD4RvP24PD\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0</field></shadow>",
"B": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"math_number\" id=\"eT8zvwq1Gl7qwHd2N2sq\" visible=\"visible\"><field constraints=\"-Infinity,Infinity,0,\" allow_text=\"true\" name=\"NUM\">0.1</field></shadow>"
},
"fields": {
"OP": "GTE"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "ZgDCDiwBWh4KYeP6dgyX"
},
"zhY8twlCRbIgA2s0pPCb": {
"type": "controls_if",
"id": "zhY8twlCRbIgA2s0pPCb",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {
"IF0": "<empty xmlns=\"http://www.w3.org/1999/xhtml\" type=\"logic_empty\" id=\"SVqmSf30y9qEbdgwctVh\" visible=\"visible\" editable=\"false\"></empty>",
"DO0": "",
"ELSE_TEXT": "",
"ELSE": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "<mutation xmlns=\"http://www.w3.org/1999/xhtml\" else=\"1\"></mutation>",
"is_output": false,
"parent_id": "ZgDCDiwBWh4KYeP6dgyX"
},
"KkiKqUMvvjgAVLrNjxOu": {
"type": "self_listen",
"id": "KkiKqUMvvjgAVLrNjxOu",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
674.8981323242188,
121.00003051757812
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"s2mDEv1PwmlMUTK903bc\" visible=\"visible\"><field name=\"MESSAGE\">显示</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"ak3bQy3lV8znUi2qtHmt": {
"type": "self_appear",
"id": "ak3bQy3lV8znUi2qtHmt",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "KkiKqUMvvjgAVLrNjxOu"
},
"kYDPW9f8EL7Hu2IcBWLS": {
"type": "self_listen",
"id": "kYDPW9f8EL7Hu2IcBWLS",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
626.8981323242188,
25.00003433227539
],
"shadows": {
"message": "<shadow xmlns=\"http://www.w3.org/1999/xhtml\" type=\"broadcast_input\" id=\"uULxo2rx6XALiOizr6wI\" visible=\"visible\"><field name=\"MESSAGE\">隐藏</field></shadow>",
"DO": ""
},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": null
},
"s2mDEv1PwmlMUTK903bc": {
"type": "broadcast_input",
"id": "s2mDEv1PwmlMUTK903bc",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "显示"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "KkiKqUMvvjgAVLrNjxOu"
},
"uULxo2rx6XALiOizr6wI": {
"type": "broadcast_input",
"id": "uULxo2rx6XALiOizr6wI",
"comment": null,
"is_shadow": true,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {
"MESSAGE": "隐藏"
},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": true,
"parent_id": "kYDPW9f8EL7Hu2IcBWLS"
},
"xWh6zKJmLuouI5zp49xG": {
"type": "self_disappear",
"id": "xWh6zKJmLuouI5zp49xG",
"comment": null,
"is_shadow": false,
"collapsed": false,
"disabled": false,
"deletable": true,
"movable": true,
"editable": true,
"visible": "visible",
"location": [
0,
0
],
"shadows": {},
"fields": {},
"field_constraints": {},
"field_extra_attr": {},
"mutation": "",
"is_output": false,
"parent_id": "kYDPW9f8EL7Hu2IcBWLS"
}
},
"connections": {
"IrnaeoYIjGXZ4FQt6HrL": {
"ZgDCDiwBWh4KYeP6dgyX": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"aDg3zOoFG2nfmfYu31lV": {
"JHdfIxqAlUDAJKd5UWNb": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"m0S0DL58yBqRhWm0E8uK": {
"iwi1dXjnOKHX4kiONNBf": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"YK4XPTz12fFdD2eaTwrf": {
"type": "next"
},
"Urwub1yE56uMx1mCy6P5": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"tGKblMeEQty2gPSNMCSO": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
}
},
"j5STTtP9Gqd2eWnZD6Kw": {},
"PtgYLAsDsXh0jhSMVdcP": {},
"iwi1dXjnOKHX4kiONNBf": {
"PtgYLAsDsXh0jhSMVdcP": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"6WBXZiC1y09zZrywu9sK": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"Lkz1BfBgLfU17ZbYbuHq": {
"a4Hz2liNiYiRucy4RaxK": {
"type": "input",
"input_type": "value",
"input_name": "VALUE"
}
},
"a4Hz2liNiYiRucy4RaxK": {},
"YK4XPTz12fFdD2eaTwrf": {
"wCZkBloP9UaZzkgoiLDn": {
"type": "next"
}
},
"JHdfIxqAlUDAJKd5UWNb": {
"m0S0DL58yBqRhWm0E8uK": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"yjPVetvvGED6y0v8Fpc3": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
}
},
"5ZXBg5aGK4K4HRJeshc7": {},
"S1ZuAwarr8BikPTPIkcT": {
"V2orawc7CdI6cm8bljzk": {
"type": "next"
}
},
"QwA2oOK3ck95azEan0ow": {
"S1ZuAwarr8BikPTPIkcT": {
"type": "next"
}
},
"yjPVetvvGED6y0v8Fpc3": {
"4gTCAwzCYr81olKe20Lx": {
"type": "input",
"input_type": "value",
"input_name": "B"
},
"5ZXBg5aGK4K4HRJeshc7": {
"type": "input",
"input_type": "value",
"input_name": "A"
}
},
"4gTCAwzCYr81olKe20Lx": {},
"wCZkBloP9UaZzkgoiLDn": {},
"V2orawc7CdI6cm8bljzk": {
"LdiZubkUcTTTE6TKulkd": {
"type": "next"
}
},
"nwIZL5sro1QNSmCj2WJC": {},
"LdiZubkUcTTTE6TKulkd": {
"nwIZL5sro1QNSmCj2WJC": {
"type": "input",
"input_type": "value",
"input_name": "time"
},
"IGevNPi9MLC6sWQ7Htq9": {
"type": "next"
}
},
"IGevNPi9MLC6sWQ7Htq9": {},
"6WBXZiC1y09zZrywu9sK": {},
"Urwub1yE56uMx1mCy6P5": {
"NrBo7egY5F3KVzicgFmA": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"NrBo7egY5F3KVzicgFmA": {},
"QIZ2bG4WUV0yY2oAkZGU": {},
"tGKblMeEQty2gPSNMCSO": {
"QIZ2bG4WUV0yY2oAkZGU": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"FYKtqdn79YxRk5HuH1Vs": {
"f9utR7BSGpdMhchTcpgi": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
},
"f9utR7BSGpdMhchTcpgi": {},
"0B1gs1XVO5BYhl2DuRUI": {
"3PmBXhDjOJQcHINREqLX": {
"type": "input",
"input_type": "value",
"input_name": "scale"
}
},
"3PmBXhDjOJQcHINREqLX": {},
"FboMm86UnbDXvUawuCdw": {},
"HKgxT3lkC7K0XzrVMcy9": {},
"JAjD1s4AVY330MV5hFVk": {},
"JgZxa5BOj6TwpmKIYSw1": {
"FboMm86UnbDXvUawuCdw": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"JmuoF3vGsNkuhtwJFwzq": {},
"LqxDEYLmlgwFy32L1FFp": {
"JAjD1s4AVY330MV5hFVk": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"O3QmjZLEEvDGt4yJCwpK": {
"HKgxT3lkC7K0XzrVMcy9": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"a0httAEtVrsi4J4G7rwj": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"ZgDCDiwBWh4KYeP6dgyX": {
"zEUjUbxVQ6zvH70Cy3cU": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"zhY8twlCRbIgA2s0pPCb": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
}
},
"a0httAEtVrsi4J4G7rwj": {},
"bHiSO44rXEv5u6oQcZeQ": {},
"eT8zvwq1Gl7qwHd2N2sq": {},
"fiIeIHGHOgd0TAh9qGeD": {
"JmuoF3vGsNkuhtwJFwzq": {
"type": "next"
}
},
"zEUjUbxVQ6zvH70Cy3cU": {
"bHiSO44rXEv5u6oQcZeQ": {
"type": "input",
"input_type": "value",
"input_name": "A"
},
"eT8zvwq1Gl7qwHd2N2sq": {
"type": "input",
"input_type": "value",
"input_name": "B"
}
},
"zhY8twlCRbIgA2s0pPCb": {
"JgZxa5BOj6TwpmKIYSw1": {
"type": "input",
"input_type": "statement",
"input_name": "ELSE"
},
"LqxDEYLmlgwFy32L1FFp": {
"type": "input",
"input_type": "statement",
"input_name": "DO0"
},
"O3QmjZLEEvDGt4yJCwpK": {
"type": "input",
"input_type": "value",
"input_name": "IF0"
},
"fiIeIHGHOgd0TAh9qGeD": {
"type": "next"
}
},
"KkiKqUMvvjgAVLrNjxOu": {
"ak3bQy3lV8znUi2qtHmt": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
},
"s2mDEv1PwmlMUTK903bc": {
"type": "input",
"input_type": "value",
"input_name": "message"
}
},
"ak3bQy3lV8znUi2qtHmt": {},
"kYDPW9f8EL7Hu2IcBWLS": {
"uULxo2rx6XALiOizr6wI": {
"type": "input",
"input_type": "value",
"input_name": "message"
},
"xWh6zKJmLuouI5zp49xG": {
"type": "input",
"input_type": "statement",
"input_name": "DO"
}
},
"s2mDEv1PwmlMUTK903bc": {},
"uULxo2rx6XALiOizr6wI": {},
"xWh6zKJmLuouI5zp49xG": {}
},
"comments": {}
}
}
],
"variables": [
{
"id": "ac1b842c-534d-4e66-9cb4-b76ec99db897",
"name": "通知",
"value": 0,
"visible": false,
"theme": "pure"
},
{
"id": "0fda2bab-f040-45cb-ac0e-75a22204a14b",
"name": "隐身卡剩余秒数",
"value": 10,
"visible": false,
"theme": "clock"
},
{
"id": "7b160e91-8427-47d2-9168-15b00a7a8fc2",
"name": "方块特效",
"value": 0,
"visible": false,
"theme": "pure"
},
{
"id": "b24ee5fd-8089-4bee-b5bb-8dc843f50a04",
"name": "性别",
"value": "男",
"visible": false,
"theme": "common"
},
{
"id": "64954a0f-cd93-4a35-b27f-4bcbbea7c35e",
"name": "金币音效",
"value": 1,
"visible": false,
"theme": "common"
},
{
"id": "71ff2d63-f0c1-41c7-8bd0-57c25d51c6c1",
"name": "a",
"value": 0,
"visible": false,
"theme": "common"
},
{
"id": "abb63166-ea57-4527-bd1a-0e4df9c62823",
"name": "速度",
"value": 5,
"visible": false,
"theme": "common"
},
{
"id": "95af2bb3-bb76-48c1-ba3e-885373996f1b",
"name": "克隆等待",
"value": 1,
"visible": false,
"theme": "common"
},
{
"id": "951bc0d9-5666-4c10-9390-62993d096e52",
"name": "排行榜状态",
"value": 0,
"visible": false,
"theme": "common"
},
{
"id": "355b6010-5d91-4821-be81-b6e78f385e81",
"name": "商店_购买隐身卡状态",
"value": 0,
"visible": false,
"theme": "common"
}
],
"cloudVariables": [
{
"id": "77b653df-3e58-4ace-a7ae-d22774f4b634",
"name": "金币",
"visible": true
},
{
"id": "75cbf2e5-8310-4c54-b3c5-1002a25d4685",
"name": "隐身卡",
"visible": true
}
],
"styleAssets": {
"93afb9a1-fb4b-45c7-8a56-2ff1e299062c": "assets/93afb9a1-fb4b-45c7-8a56-2ff1e299062c.svg",
"ccf604f3-5f46-4906-a313-44e6f9d2751f": "assets/ccf604f3-5f46-4906-a313-44e6f9d2751f.svg",
"ae8bcd36-25d3-4ea4-b907-38d4ccf4621b": "assets/ae8bcd36-25d3-4ea4-b907-38d4ccf4621b.svg",
"f7d11164-89e0-4dc3-9f9a-cf31462c9646": "assets/f7d11164-89e0-4dc3-9f9a-cf31462c9646.svg",
"5f31b9f6-2011-4ddd-b6f1-d6ae0e32e924": "assets/5f31b9f6-2011-4ddd-b6f1-d6ae0e32e924.svg",
"7f85355f-5235-4822-a5c1-ff5f94787eb6": "assets/7f85355f-5235-4822-a5c1-ff5f94787eb6.svg",
"e3b52a95-c5f1-4230-b0b7-7b43264f8459": "assets/e3b52a95-c5f1-4230-b0b7-7b43264f8459.svg",
"5cbcaeea-4967-4392-a885-900aca3ee751": "assets/5cbcaeea-4967-4392-a885-900aca3ee751.png",
"8ce09211-edda-4726-95fe-488811ff6a70": "assets/8ce09211-edda-4726-95fe-488811ff6a70.svg",
"15532777-9e75-4ee7-ab8a-4a69de8817fd": "assets/15532777-9e75-4ee7-ab8a-4a69de8817fd.svg",
"0a41d49a-4fb2-4a8f-b441-c93c3e07c006": "assets/0a41d49a-4fb2-4a8f-b441-c93c3e07c006.svg",
"dba0b946-015a-4111-9a45-d702553aeb36": "assets/dba0b946-015a-4111-9a45-d702553aeb36.png",
"41a42dae-f76c-4ce7-9081-a41789413718": "assets/41a42dae-f76c-4ce7-9081-a41789413718.png",
"47e1a9ad-ccec-4bb5-b59f-9e46f4d9498d": "assets/47e1a9ad-ccec-4bb5-b59f-9e46f4d9498d.png",
"6923df33-9f4e-4f79-8951-df5476a662da": "assets/6923df33-9f4e-4f79-8951-df5476a662da.png",
"1f637f5f-6f20-4785-8f89-fb069872ff69": "assets/1f637f5f-6f20-4785-8f89-fb069872ff69.png",
"13086f79-f302-4ad7-973a-b8b7e9a5e0e2": "assets/13086f79-f302-4ad7-973a-b8b7e9a5e0e2.svg",
"4a699fef-6b03-49d9-8b2a-f9fe95ddcd68": "assets/4a699fef-6b03-49d9-8b2a-f9fe95ddcd68.svg",
"77078571-337c-4d50-bcf1-dc8e0e65f0ac": "assets/77078571-337c-4d50-bcf1-dc8e0e65f0ac.svg",
"7d7fb5b5-c8d5-44a8-836d-0db5d282c44f": "assets/7d7fb5b5-c8d5-44a8-836d-0db5d282c44f.svg",
"8dec73bf-d367-4d26-be62-72326a69d28a": "assets/8dec73bf-d367-4d26-be62-72326a69d28a.svg",
"bf4d2b4a-77b8-4ec6-9dc0-35eabb42d3b9": "assets/bf4d2b4a-77b8-4ec6-9dc0-35eabb42d3b9.svg",
"8d449f78-e76b-43fe-a0b8-f35189771255": "assets/8d449f78-e76b-43fe-a0b8-f35189771255.svg",
"746678d6-d066-4052-9e86-527cddbdb4e3": "assets/746678d6-d066-4052-9e86-527cddbdb4e3.png",
"93681270-ea6f-4252-bda3-13734e7ca323": "assets/93681270-ea6f-4252-bda3-13734e7ca323.png",
"c1f31e0b-7db9-4d42-99d7-2013665f3e59": "assets/c1f31e0b-7db9-4d42-99d7-2013665f3e59.png",
"9dc7a141-83ea-48aa-92b4-7c1c945e0504": "assets/9dc7a141-83ea-48aa-92b4-7c1c945e0504.svg",
"d2b00c36-7831-42c5-95ce-2b693e854ded": "assets/d2b00c36-7831-42c5-95ce-2b693e854ded.svg",
"1e4dd6a0-b4fc-4187-9984-e2c3028d24ed": "assets/1e4dd6a0-b4fc-4187-9984-e2c3028d24ed.svg",
"3da92712-4aac-4eb4-84f6-c2d4263bfa59": "assets/3da92712-4aac-4eb4-84f6-c2d4263bfa59.svg",
"5c773ce2-269b-4e1a-ac71-033baecd3ccc": "assets/5c773ce2-269b-4e1a-ac71-033baecd3ccc.svg",
"96a4b4c6-9a02-4d43-bddc-dd0a1e6e55b7": "assets/96a4b4c6-9a02-4d43-bddc-dd0a1e6e55b7.svg",
"ca8efc8b-80f3-46e3-ab4e-9a0158db3bf8": "assets/ca8efc8b-80f3-46e3-ab4e-9a0158db3bf8.svg",
"127b5f62-33a6-4f16-a7c0-f4c7d92fbd45": "assets/127b5f62-33a6-4f16-a7c0-f4c7d92fbd45.svg",
"15065f05-97c1-4ff7-be89-f3ea24ea0b22": "assets/15065f05-97c1-4ff7-be89-f3ea24ea0b22.svg",
"48c1ba06-229c-4fc6-b821-4ced02959e23": "assets/48c1ba06-229c-4fc6-b821-4ced02959e23.svg",
"29431f41-f7d1-4703-8dc8-43228a7fb995": "assets/29431f41-f7d1-4703-8dc8-43228a7fb995.svg",
"cbb050a6-a3b1-4460-8409-7af68fc6e3e6": "assets/cbb050a6-a3b1-4460-8409-7af68fc6e3e6.svg",
"ba83dc75-1c42-4fa1-b347-362398c49e00": "assets/ba83dc75-1c42-4fa1-b347-362398c49e00.svg",
"765bb1b3-1349-4ea4-8983-9fc79e37aee2": "assets/765bb1b3-1349-4ea4-8983-9fc79e37aee2.svg",
"04785629-4324-44f9-87d9-0d8b6d4f736f": "assets/04785629-4324-44f9-87d9-0d8b6d4f736f.svg",
"395b6e09-6d3b-4b7c-aa9e-968cb8b80924": "assets/395b6e09-6d3b-4b7c-aa9e-968cb8b80924.svg",
"50ab134c-937c-4ffd-a7da-501ad405332c": "assets/50ab134c-937c-4ffd-a7da-501ad405332c.svg",
"20b5e865-289a-4db5-beee-f91f3e20fd87": "assets/20b5e865-289a-4db5-beee-f91f3e20fd87.svg",
"e6f48bd0-e9cd-4f6e-92d9-000e1ec58361": "assets/e6f48bd0-e9cd-4f6e-92d9-000e1ec58361.svg",
"d8c9910c-1906-41cc-9ad2-f509398cff96": "assets/d8c9910c-1906-41cc-9ad2-f509398cff96.svg",
"a2e2c343-3c77-43ec-87e0-a765d844c18e": "assets/a2e2c343-3c77-43ec-87e0-a765d844c18e.svg",
"82245bba-aee8-4f95-aecc-95daa203b37a": "assets/82245bba-aee8-4f95-aecc-95daa203b37a.svg",
"1ea9c27d-8a37-4752-977c-81b30874ae60": "assets/1ea9c27d-8a37-4752-977c-81b30874ae60.svg",
"e2d1e8ec-f5e1-4d9a-abfc-c64256349aa1": "assets/e2d1e8ec-f5e1-4d9a-abfc-c64256349aa1.svg"
}
};
