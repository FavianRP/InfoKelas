(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/MateriList.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MateriList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '/data'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function MateriList() {
    _s();
    const [materi, setMateri] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [judul, setJudul] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [deskripsi, setDeskripsi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [link, setLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isAdmin, setIsAdmin] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MateriList.useEffect": ()=>{
            // Cek role di localStorage
            const role = localStorage.getItem("role");
            setIsAdmin(role === "admin");
            loadMateri();
        }
    }["MateriList.useEffect"], []);
    async function loadMateri() {
        const data = await fetchMateri();
        setMateri(data);
    }
    async function handleAdd(e) {
        e.preventDefault();
        if (!isAdmin) return; // Non-admin tidak bisa menambah
        if (!judul || !deskripsi) return;
        const newMateri = {
            judul,
            isi: deskripsi,
            file: link,
            tanggal: new Date().toISOString().split("T")[0]
        };
        const res = await addMateri(newMateri);
        setMateri([
            ...materi,
            {
                id: res.id,
                ...newMateri
            }
        ]);
        setJudul("");
        setDeskripsi("");
        setLink("");
    }
    async function handleDelete(id) {
        if (!isAdmin) return; // Non-admin tidak bisa hapus
        await deleteMateri(id);
        setMateri(materi.filter((m)=>m.id !== id));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold",
                children: "Materi"
            }, void 0, false, {
                fileName: "[project]/app/components/MateriList.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleAdd,
                className: "p-4 bg-gray-100 rounded space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: judul,
                        onChange: (e)=>setJudul(e.target.value),
                        placeholder: "Judul",
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/MateriList.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        value: deskripsi,
                        onChange: (e)=>setDeskripsi(e.target.value),
                        placeholder: "Deskripsi",
                        className: "w-full border p-2 rounded",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/app/components/MateriList.js",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        value: link,
                        onChange: (e)=>setLink(e.target.value),
                        placeholder: "Link / File (PDF, GDrive, dsb.)",
                        className: "w-full border p-2 rounded"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MateriList.js",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800",
                        children: "Tambah"
                    }, void 0, false, {
                        fileName: "[project]/app/components/MateriList.js",
                        lineNumber: 77,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/MateriList.js",
                lineNumber: 56,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "space-y-3",
                children: materi.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500",
                    children: "Belum ada materi."
                }, void 0, false, {
                    fileName: "[project]/app/components/MateriList.js",
                    lineNumber: 89,
                    columnNumber: 11
                }, this) : materi.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "p-4 bg-gray-100 rounded shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold",
                                            children: m.judul
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MateriList.js",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600",
                                            children: m.isi
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MateriList.js",
                                            lineNumber: 96,
                                            columnNumber: 19
                                        }, this),
                                        m.file && (m.file.endsWith(".pdf") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                                            src: m.file,
                                            className: "w-full h-48 border mt-2"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MateriList.js",
                                            lineNumber: 99,
                                            columnNumber: 23
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: m.file,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-blue-600 underline mt-2 block",
                                            children: "Buka File"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/MateriList.js",
                                            lineNumber: 101,
                                            columnNumber: 23
                                        }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-500 mt-1",
                                            children: [
                                                "Tanggal: ",
                                                m.tanggal
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/MateriList.js",
                                            lineNumber: 111,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/MateriList.js",
                                    lineNumber: 94,
                                    columnNumber: 17
                                }, this),
                                isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleDelete(m.id),
                                    className: "text-red-600 hover:underline",
                                    children: "Hapus"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/MateriList.js",
                                    lineNumber: 116,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/MateriList.js",
                            lineNumber: 93,
                            columnNumber: 15
                        }, this)
                    }, m.id, false, {
                        fileName: "[project]/app/components/MateriList.js",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/MateriList.js",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-500",
                children: "Hanya admin yang dapat menambah atau menghapus materi."
            }, void 0, false, {
                fileName: "[project]/app/components/MateriList.js",
                lineNumber: 130,
                columnNumber: 20
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/MateriList.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(MateriList, "/3niZtVk5+C1Ecdsy6noViQ0kEA=");
_c = MateriList;
var _c;
__turbopack_context__.k.register(_c, "MateriList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_components_MateriList_2fdc965e.js.map