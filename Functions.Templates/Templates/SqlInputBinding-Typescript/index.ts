import { AzureFunction, Context, HttpRequest } from "@azure/functions"

/**
 * Sample SQL Input Binding
 * See https://aka.ms/sqlbindingsinput for more information about using this binding
 * @param context The Azure Function runtime context
 * @param req The HttpRequest that triggered this function
 * @param items The array of objects returned by the SQL input binding
 */
const sqlInputBinding: AzureFunction = async function (context: Context, req: HttpRequest, items: any[]): Promise<void> {
    context.log('HTTP trigger with SQL input binding function processed a request.');
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: items
    };
};

export default sqlInputBinding;