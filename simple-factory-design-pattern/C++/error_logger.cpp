#include "error_logger.hpp"
#include "common.hpp"

void ErrorLogger::log(const string &msg){
    cout << "ERROR: " << msg << endl;
}