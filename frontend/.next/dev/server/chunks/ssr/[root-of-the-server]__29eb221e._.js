module.exports = [
"[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/frontend/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/frontend/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/frontend/lib/data.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
    "fetchMateriById",
    ()=>fetchMateriById,
    "getAllJadwal",
    ()=>getAllJadwal,
    "getAllTugas",
    ()=>getAllTugas,
    "updateMateri",
    ()=>updateMateri,
    "updateTugas",
    ()=>updateTugas
]);
const API_URL = "http://localhost:5000"; // backend SQLite
function getTokenHeader() {
    if ("TURBOPACK compile-time truthy", 1) return {}; // supaya SSR tidak error
    //TURBOPACK unreachable
    ;
    const token = undefined;
}
async function getAllTugas() {
    const res = await fetch(`${API_URL}/tugas`, {
        headers: getTokenHeader(),
        cache: "no-store"
    });
    return res.json();
}
async function addTugas(tugas) {
    const res = await fetch(`${API_URL}/tugas`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function deleteTugas(id) {
    const res = await fetch(`${API_URL}/tugas/${id}`, {
        method: "DELETE",
        headers: getTokenHeader()
    });
    return res.json();
}
async function updateTugas(id, tugas) {
    const res = await fetch(`${API_URL}/tugas/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(tugas)
    });
    return res.json();
}
async function getAllJadwal() {
    const res = await fetch(`${API_URL}/jadwal`, {
        headers: getTokenHeader(),
        cache: 'no-store'
    });
    return res.json();
}
async function addJadwal(data) {
    const res = await fetch(`${API_URL}/jadwal`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteJadwal(id) {
    const res = await fetch(`${API_URL}/jadwal/${id}`, {
        method: 'DELETE',
        headers: getTokenHeader()
    });
    return res.json();
}
async function fetchMateri() {
    try {
        const res = await fetch(`${API_URL}/materi`, {
            headers: getTokenHeader()
        });
        if (!res.ok) throw new Error("Gagal fetch materi");
        return res.json();
    } catch (error) {
        console.error("Error fetchMateri:", error);
        return [];
    }
}
async function fetchMateriById(id) {
    try {
        const res = await fetch(`${API_URL}/materi/${id}`, {
            headers: getTokenHeader()
        });
        if (!res.ok) return null;
        return res.json();
    } catch (error) {
        console.error("Error fetchMateriById:", error);
        return null;
    }
}
async function addMateri(data) {
    const res = await fetch(`${API_URL}/materi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function updateMateri(id, data) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            ...getTokenHeader()
        },
        body: JSON.stringify(data)
    });
    return res.json();
}
async function deleteMateri(id) {
    const res = await fetch(`${API_URL}/materi/${id}`, {
        method: "DELETE",
        headers: getTokenHeader()
    });
    return res.json();
}
}),
"[project]/frontend/app/components/TugasList.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/app/components/TugasList.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/app/components/TugasList.js <module evaluation>", "default");
}),
"[project]/frontend/app/components/TugasList.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/frontend/app/components/TugasList.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/frontend/app/components/TugasList.js", "default");
}),
"[project]/frontend/app/components/TugasList.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$TugasList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/frontend/app/components/TugasList.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$TugasList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/frontend/app/components/TugasList.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$TugasList$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/frontend/app/tugas/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TugasPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/data.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$TugasList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/app/components/TugasList.js [app-rsc] (ecmascript)");
;
;
;
async function TugasPage() {
    // Ambil data dari backend (async)
    const semuaTugas = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllTugas"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-8 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$app$2f$components$2f$TugasList$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                initialTugas: semuaTugas
            }, void 0, false, {
                fileName: "[project]/frontend/app/tugas/page.js",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/app/tugas/page.js",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/app/tugas/page.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/app/tugas/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/frontend/app/tugas/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__29eb221e._.js.map