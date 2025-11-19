(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addJadwal",
    ()=>addJadwal,
    "addMateri",
    ()=>addMateri,
    "addTugas",
    ()=>addTugas,
    "deleteJadwal",
    ()=>deleteJadwal,
    "deleteMateri",
    ()=>deleteMateri,
    "deleteTugas",
    ()=>deleteTugas,
    "fetchMateri",
    ()=>fetchMateri,
    "getAllJadwal",
    ()=>getAllJadwal,
    "getAllTugas",
    ()=>getAllTugas,
    "updateJadwal",
    ()=>updateJadwal,
    "updateMateri",
    ()=>updateMateri
]);
const API_URL = "http://localhost:5000"; // backend SQLite
async function getAllTugas() {
    const res = await fetch(`${API_URL}/tugas`, {
        cache: "no-store"
    });
    return res.json();
}
async function addTugas(tugas) {
    const res = await fetch("http://localhost:5000/tugas", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function deleteTugas(id) {
    const res = await fetch(`http://localhost:5000/tugas/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
async function getAllJadwal() {
    const res = await fetch(`${API_URL}/jadwal`, {
        cache: "no-store"
    });
    return res.json();
}
async function addJadwal(jadwal) {
    const res = await fetch(`${API_URL}/jadwal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jadwal)
    });
    return res.json();
}
async function updateJadwal(id, jadwal) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jadwal)
    });
    return res.json();
}
async function deleteJadwal(id) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
async function fetchMateri() {
    const res = await fetch(`${API_URL}/materi`);
    return res.json();
}
async function addMateri(data) {
    const res = await fetch(`${API_URL}/materi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteMateri(id) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "DELETE"
    });
    return res.json();
}
async function updateMateri(id, data) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/materi/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MateriList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.js [app-client] (ecmascript)"); // pastikan fungsi ini dibuat di lib/data
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function MateriList({ initialMateri }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [materi, setMateri] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialMateri);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        judul: "",
        isi: "",
        tanggal: ""
    });
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MateriList.useEffect": ()=>{
            const role = localStorage.getItem("role");
            setIsAdmin(role === "admin");
        }
    }["MateriList.useEffect"], []);
    // Tambah Materi
    const handleAdd = async (e)=>{
        e.preventDefault();
        if (!isAdmin) return;
        const newMateri = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addMateri"])(form);
        setMateri([
            ...materi,
            {
                id: newMateri.id,
                ...form
            }
        ]);
        setForm({
            judul: "",
            isi: "",
            tanggal: ""
        });
    };
    // Hapus Materi
    const handleDelete = async (id)=>{
        if (!isAdmin) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMateri"])(id);
        setMateri(materi.filter((m)=>m.id !== id));
    };
    // Update Materi (opsional, bisa dipanggil dari tombol edit)
    const handleUpdate = async (id, updatedData)=>{
        if (!isAdmin) return;
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMateri"])(id, updatedData);
        setMateri(materi.map((m)=>m.id === id ? {
                ...m,
                ...updatedData
            } : m));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAdd,
                className: "p-4 bg-gray-100 text-gray-900 rounded-lg shadow space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold text-lg",
                        children: "Tambah Materi"
                    }, void 0, false, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        placeholder: "Judul",
                        value: form.judul,
                        onChange: (e)=>setForm({
                                ...form,
                                judul: e.target.value
                            }),
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Isi Materi",
                        value: form.isi,
                        onChange: (e)=>setForm({
                                ...form,
                                isi: e.target.value
                            }),
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: form.tanggal,
                        onChange: (e)=>setForm({
                                ...form,
                                tanggal: e.target.value
                            }),
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 cursor-pointer",
                        children: "Tambah"
                    }, void 0, false, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/materi/page.js",
                lineNumber: 48,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: materi.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 bg-gray-100 text-gray-900 rounded-lg shadow flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold",
                                        children: m.judul
                                    }, void 0, false, {
                                        fileName: "[project]/app/materi/page.js",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600",
                                        children: m.isi
                                    }, void 0, false, {
                                        fileName: "[project]/app/materi/page.js",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-500",
                                        children: [
                                            "Tanggal: ",
                                            m.tanggal
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/materi/page.js",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/materi/page.js",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleDelete(m.id),
                                className: "text-red-600 hover:underline cursor-pointer",
                                children: "Hapus"
                            }, void 0, false, {
                                fileName: "[project]/app/materi/page.js",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, m.id, true, {
                        fileName: "[project]/app/materi/page.js",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/materi/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/materi/page.js",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(MateriList, "kv497gMHn0BC8HGeUV+QLkfn0xw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MateriList;
var _c;
__turbopack_context__.k.register(_c, "MateriList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_600ad575._.js.map