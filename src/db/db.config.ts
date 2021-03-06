import {
    createUser,
    dropUser,
    createPermissions,
    dropPermissions,
    createRoles,
    dropRoles,
    createCategories,
    dropCategories,
    createProducts,
    dropProducts,
    createTopics,
    dropTopics,
} from './script'

/**
 * creates and drops the default database entries.
 * @param drop - drop database on server restart
 */
const dbConfig = async drop => {
    if (drop) {
        await dropUser()
        await dropRoles()
        await dropPermissions()
        await dropCategories()
        await dropTopics()
        await dropProducts()
    }

    await createPermissions()
    await createRoles()
    await createUser()
    await createCategories()
    await createTopics()
    await createProducts()
}

export { dbConfig }
