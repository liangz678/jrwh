export default {
    meta: {
        envs_n: 3,
        demand_n: 3,
    },
    task: {
        envs: [ //作战环境
            {
                id: 1,
                text: "物理空间封闭性",
                rank: ["极强","较强","一般"],
                rank_desc: ["","",""],
                tooltip: "物理空间封闭性<br/>tooltip"
            },
            {
                id: 2,
                text: "信息交流度",
                rank: ["完全隔绝","相对隔绝","有限交流","默认无限制"],
                rank_desc: ["","","",""],
                tooltip: ""
            },
            {
                id: 3,
                text: "广域性",
                rank: ["广域作战","战场广阔","区域性战场"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 4,
                text: "艰苦度（生存条件）",
                rank: ["十分恶劣","复杂严峻","相对艰苦"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 5,
                text: "文化工作保障难度",
                rank: ["极其困难","比较困难","一般"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 6,
                text: "危险性",
                rank: ["极其凶险","十分危险","比较危险"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 7,
                text: "敌情政情社情",
                rank: ["极其复杂","情况复杂","比较复杂"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 8,
                text: "电磁与核生化环境",
                rank: ["复杂恶劣","复杂多变","比较复杂"],
                rank_desc: ["","",""],
                tooltip: ""
            },
        ],
        grade: [//任务强度
            {
                id: 9,
                text: "繁重度(任务密度带来的身体压力)",
                rank: ["极其繁重","任务繁重","比较繁重"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 10,
                text: "风险度(危机挑战带来的精神考验及心理压力)",
                rank: ["风险度极高","风险度高","挑战性强"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 11,
                text: "对抗性(激烈交锋带来的意志考验)",
                rank: ["对抗白热化","对抗激烈","对抗较激烈"],
                rank_desc: ["","",""],
                tooltip: ""
            },
            {
                id: 12,
                text: "技战术难度(技术及战术要求带来的智力精神考验)",
                rank: ["技战术难度极高","技战术难度高","有技战术难度"],
                rank_desc: ["","",""],
                tooltip: ""
            },            
        ],
        relationship:[
            {
                id: 13,
                text: "人际特征",
                rank: ["单兵作战","单组作战","单兵种作战","诸兵种作战","多军种作战","全域多战位协同作战"],
                rank_desc: ["","",""],
                tooltip: ""
            },                
        ],
        time:[
            {
                id: 14,
                text: "持续性特征",
                rank: ["时间漫长","时间较长","时间较短"],
                rank_desc: ["","",""],
                tooltip: ""
            }, 
            {
                id: 15,
                text: "发生性特征",
                rank: ["突发性强","突发性较强","突发性一般"],
                rank_desc: ["","",""],
                tooltip: ""
            }, 
            {
                id: 16,
                text: "任务转换频率",
                rank: ["极高","高","较高"],
                rank_desc: ["","",""],
                tooltip: ""
            },             
        ],        
    },

    demand: [
        {
            id: 1,
            text:"战地教育",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 2,
            text:"调适减压",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 3,
            text:"镇定情绪",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 4,
            text:"丰富学习",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 5,
            text:"情感抚慰",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 6,
            text:"激励斗志",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 7,
            text:"休闲娱乐",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 8,
            text:"交流互动",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 9,
            text:"心理治疗",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 10,
            text:"团队协作",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 11,
            text:"心理训练",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
        {
            id: 12,
            text:"感知激活",
            rank:["强烈","中等","一般"],
            rank_desc: ["","",""],
            tooltip: ""
        },
    ],

    item: [
        {
            name: "微视频展播",
            text: "通过网络投送",
            demand_limit: [1,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "幽默型小型演出活动",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "文艺轻骑队",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "唱歌活动",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "故事会",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "艺术治疗",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "野战电视台",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "音乐治疗",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "影视放映",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "训练剪影播放",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
        {
            name: "拉歌曲活动",
            text: "",
            demand_limit: [0,1,1,1,1,1,1,3,3,0,0,2],
            task_limit:{
                envs: [1,1,1,3,1,3],
                grade: [1,1,3,3],
                relationship: [1],
                time: [2,3,0]
            }
        },
    ]
}