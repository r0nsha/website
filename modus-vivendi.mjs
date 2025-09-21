const c = {
    gray: "#989898",
    white: "#ffffff",
    green: "#88ca9f",
    blue: "#2fafff",
    blueSubtle: "#79a8ff",
    cyan: "#00d3d0",
    yellow: "#d0bc00",
    red: "#ff5f59",
    orange: "#c0965b",
    purple: "#b6a0ff",
    pink: "#feacd0",
};

const theme = {
    name: "modus-vivendi",
    settings: [
        {
            scope: ["source", "text", "punctuation.definition"],
            settings: { foreground: c.white },
        },

        {
            scope: ["punctuation.definition.string"],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: ["comment", "punctuation.definition.comment", "comment.block.documentation"],
            settings: { foreground: c.gray, fontStyle: "italic" },
        },

        {
            scope: ["comment.block.documentation"],
            settings: { foreground: c.green, fontStyle: "italic" },
        },

        {
            scope: ["constant.language", "constant.other.boolean"],
            settings: { foreground: c.blue, fontStyle: "bold" },
        },

        {
            scope: [
                "constant.numeric",
                "constant.numeric.integer",
                "constant.numeric.float",
                "constant.numeric.hex",
            ],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: [
                "constant.character",
                "constant.character.escape",
                "constant.character.escape.python",
            ],
            settings: { foreground: c.orange },
        },

        {
            scope: [
                "string",
                "string.quoted",
                "string.template",
                "string.interpolated",
                "string.quoted.single",
                "string.quoted.double",
                "string.regexp",
            ],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: ["string.escape", "constant.character.escape"],
            settings: { foreground: c.orange },
        },

        {
            scope: ["keyword", "keyword.other", "variable.function", "storage.type.function"],
            settings: { foreground: c.pink, fontStyle: "" },
        },

        {
            scope: ["keyword.control", "storage", "storage.type", "storage.modifier"],
            settings: { foreground: c.purple, fontStyle: "italic" },
        },

        {
            scope: ["keyword.operator", "keyword.operator.assignment", "keyword.operator.logical"],
            settings: { foreground: c.white },
        },

        {
            scope: [
                "entity.name.function",
                "support.function",
                "meta.function-call",
                "meta.method-call",
            ],
            settings: { foreground: c.pink },
        },

        {
            scope: ["variable.parameter"],
            settings: { foreground: c.white },
        },

        {
            scope: ["variable", "variable.other", "identifier"],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["variable", "variable.other", "identifier"],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["variable.other.constant", "constant", "support.constant"],
            settings: { foreground: c.cyan },
        },

        {
            scope: [
                "entity.name.type",
                "support.type",
                "entity.name.class",
                "meta.class",
                "storage.type.class",
            ],
            settings: { foreground: c.green },
        },

        {
            scope: ["entity.name.namespace", "entity.name.module", "support.module"],
            settings: { foreground: c.purple },
        },

        {
            scope: [
                "meta.property-name",
                "meta.object-literal.key",
                "variable.property",
                "support.type.property-name",
                "property",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: [
                "punctuation",
                "punctuation.definition.parameters",
                "punctuation.definition.brackets",
                "punctuation.definition.tag",
                "punctuation.separator",
            ],
            settings: { foreground: c.white },
        },

        {
            scope: [
                "meta.brace",
                "meta.delimiter",
                "meta.structure.dictionary.json",
                "meta.structure.dictionary.value.json",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["entity.name.tag", "markup.tag", "meta.tag.inline", "meta.tag.block"],
            settings: { foreground: c.cyan },
        },

        {
            scope: [
                "entity.other.attribute-name",
                "meta.attribute",
                "storage.type.annotation",
                "meta.decorator",
                "annotation",
            ],
            settings: { foreground: c.orange },
        },

        {
            scope: [
                "support.type.property-name.xml",
                "entity.name.tag.xml",
                "entity.other.attribute-name.xml",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["invalid", "invalid.illegal", "markup.error", "invalid.deprecated"],
            settings: { foreground: c.red, fontStyle: "underline" },
        },

        {
            scope: ["markup.warning", "comment.todo", "keyword.todo", "constant.other.todo"],
            settings: { foreground: c.yellow, fontStyle: c.yellow },
        },

        {
            scope: [
                "markup.info",
                "entity.name.section",
                "markup.heading",
                "markup.heading.markdown",
            ],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: ["meta.embedded", "source.embedded", "text.html.markdown", "markup.inline.raw"],
            settings: { foreground: c.white },
        },

        {
            scope: ["markup.italic", "markup.emphasis", "markup.quote"],
            settings: { foreground: c.cyan, fontStyle: "italic" },
        },

        {
            scope: ["markup.bold", "markup.strong"],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["markup.link", "string.other.link", "constant.other.reference.link"],
            settings: { foreground: c.blueSubtle, fontStyle: "underline" },
        },

        {
            scope: ["meta.diff.header", "constant.other.diff", "markup.inserted"],
            settings: { foreground: c.green, background: "#00381f" },
        },

        {
            scope: ["markup.deleted", "markup.changed", "markup.inserted.diff"],
            settings: { foreground: c.red },
        },

        {
            scope: ["meta.function-call", "support.class", "support.type", "entity.name.selector"],
            settings: { foreground: c.orange },
        },

        {
            scope: ["support.variable", "variable.language", "variable.language"],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["storage.modifier.import", "storage.modifier", "meta.import"],
            settings: { foreground: c.purple },
        },

        {
            scope: [
                "meta.preprocessor",
                "keyword.control.directive",
                "punctuation.definition.preprocessor",
            ],
            settings: { foreground: c.yellow },
        },

        {
            scope: [
                "constant.character.escape.python",
                "constant.character.escape.regex",
                "regexp",
                "string.regexp",
            ],
            settings: { foreground: c.orange },
        },

        {
            scope: [
                "support.function.builtin",
                "support.constant.builtin",
                "support.builtin",
                "support.other",
            ],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: [
                "meta.structure.dictionary.key.json",
                "string.quoted.key.json",
                "meta.binding.pattern",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: [
                "entity.name.operation",
                "keyword.operator.increment",
                "keyword.operator.decrement",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["keyword.operator.new"],
            settings: { foreground: c.white },
        },

        {
            scope: ["source.sql", "keyword.other.ddl", "keyword.other.dml"],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: ["constant.other.symbol", "meta.tag.attributes", "entity.other.attribute-name"],
            settings: { foreground: c.pink },
        },

        {
            scope: [
                "meta.embedded.block",
                "meta.interpolation.expression",
                "punctuation.definition.interpolation",
            ],
            settings: { foreground: c.pink },
        },

        {
            scope: ["meta.header", "meta.toc-list", "punctuation.definition.list_item"],
            settings: { foreground: c.cyan },
        },

        {
            scope: [
                "support.type.property-name.css",
                "entity.name.tag.css",
                "meta.property-list.css",
            ],
            settings: { foreground: c.cyan },
        },

        {
            scope: ["constant.other.color", "support.constant.color", "meta.property-value.color"],
            settings: { foreground: c.pink },
        },

        {
            scope: ["storage.modifier.async", "storage.modifier.primitive"],
            settings: { foreground: c.blueSubtle },
        },

        {
            scope: ["meta.sequence", "meta.collection", "meta.mapping"],
            settings: { foreground: c.white },
        },
    ],
};

export default theme;
