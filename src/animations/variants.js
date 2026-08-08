export const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

export const itemVariants = {
    hidden: {
        opacity: 0,
        x: -15,
    },
    visible: {
        opacity: 1,
        x: 0,
    },
};